import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { LANGS, ui } from "./ui.js";
import { getContent } from "./content.js";

const LANG_KEY = "portfolio-lang";
const THEME_KEY = "portfolio-theme";

function readStored(key) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null; // storage blocked (private mode etc.)
  }
}

function writeStored(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    /* ignore */
  }
}

function initialLang() {
  const stored = readStored(LANG_KEY);
  if (LANGS.includes(stored)) return stored;
  const browser = (navigator.languages?.[0] ?? navigator.language ?? "en").toLowerCase();
  return browser.startsWith("fi") ? "fi" : "en";
}

// Dark is the original look of the site, so it stays the default.
function initialTheme() {
  const stored = readStored(THEME_KEY);
  return stored === "light" || stored === "dark" ? stored : "dark";
}

const SettingsContext = createContext(null);

export function SettingsProvider({ children }) {
  const [lang, setLang] = useState(initialLang);
  const [theme, setTheme] = useState(initialTheme);

  // Keep <html>, <title> and the meta description in sync and persist choices.
  useEffect(() => {
    const strings = ui[lang];
    document.documentElement.lang = lang;
    document.title = strings.siteTitle;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", strings.metaDescription);
    writeStored(LANG_KEY, lang);
  }, [lang]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#17181b" : "#ffffff");
    writeStored(THEME_KEY, theme);
  }, [theme]);

  const toggleLang = useCallback(() => setLang((l) => (l === "en" ? "fi" : "en")), []);
  const toggleTheme = useCallback(
    () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    []
  );

  const value = useMemo(
    () => ({
      lang,
      theme,
      toggleLang,
      toggleTheme,
      t: ui[lang],
      content: getContent(lang),
    }),
    [lang, theme, toggleLang, toggleTheme]
  );

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useSettings must be used inside <SettingsProvider>");
  return ctx;
}

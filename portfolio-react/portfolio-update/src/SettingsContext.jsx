import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getData } from "./localize.js";
import { ui } from "./i18n.js";

const SettingsContext = createContext(null);

function readStored(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStored(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* storage unavailable: ignore */
  }
}

export function SettingsProvider({ children }) {
  // Theme defaults to dark (the current design); the choice is remembered.
  const [theme, setTheme] = useState(() => (readStored("theme") === "light" ? "light" : "dark"));

  // Language: remembered choice, otherwise Finnish for Finnish browsers.
  const [lang, setLang] = useState(() => {
    const saved = readStored("lang");
    if (saved === "fi" || saved === "en") return saved;
    return navigator.language?.toLowerCase().startsWith("fi") ? "fi" : "en";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    writeStored("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = ui[lang].meta.title;
    writeStored("lang", lang);
  }, [lang]);

  const value = useMemo(
    () => ({
      theme,
      lang,
      setLang,
      toggleTheme: () => setTheme((prev) => (prev === "dark" ? "light" : "dark")),
      t: ui[lang],
      data: getData(lang),
    }),
    [theme, lang]
  );

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

export function useSettings() {
  return useContext(SettingsContext);
}

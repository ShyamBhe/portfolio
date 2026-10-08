import { useSettings } from "../i18n/SettingsContext.jsx";

export default function Controls() {
  const { lang, theme, toggleLang, toggleTheme, t } = useSettings();

  const isDark = theme === "dark";

  // Select a specific language.
  // toggleLang() is only called when the requested language
  // is different from the currently active language.
  const selectLanguage = (language) => {
    if (lang !== language) {
      toggleLang();
    }
  };

  return (
    <div className="site-controls">
      {/* Language switcher */}
      <div className="lang-switch" role="group" aria-label="Kieli / Language">
        {/* Global icon */}
        <span className="lang-globe" aria-hidden="true" title="Language">
          <i className="fa-solid fa-globe"></i>
        </span>

        {/* Finnish */}
        <button
          type="button"
          className={lang === "fi" ? "active" : ""}
          aria-pressed={lang === "fi"}
          onClick={() => selectLanguage("fi")}
          title="Suomi"
        >
          FI
        </button>

        {/* English */}
        <button
          type="button"
          className={lang === "en" ? "active" : ""}
          aria-pressed={lang === "en"}
          onClick={() => selectLanguage("en")}
          title="English"
        >
          EN
        </button>
      </div>

      {/* Theme */}
      <button
        type="button"
        className="ctrl-btn ctrl-theme"
        onClick={toggleTheme}
        aria-label={isDark ? t.controls.toLight : t.controls.toDark}
        aria-pressed={isDark}
        title={isDark ? t.controls.toLight : t.controls.toDark}
      >
        <i
          className={`fa-solid ${isDark ? "fa-sun" : "fa-moon"}`}
          aria-hidden="true"
        ></i>
      </button>
    </div>
  );
}

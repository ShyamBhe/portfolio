import { useEffect, useState } from "react";
import { Container, Navbar, Nav as BsNav, Offcanvas } from "react-bootstrap";
import { useSettings } from "../SettingsContext.jsx";

export default function Nav() {
  const { t, data, lang, setLang, theme, toggleTheme } = useSettings();
  const [expanded, setExpanded] = useState(false);
  const [activeHref, setActiveHref] = useState("#header");

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));

    function setActiveLink() {
      let currentId = sections[0]?.id;
      const scrollPos = window.scrollY + window.innerHeight * 0.3;
      for (const section of sections) {
        if (section.offsetTop <= scrollPos) currentId = section.id;
      }
      setActiveHref(`#${currentId}`);
    }

    window.addEventListener("scroll", setActiveLink, { passive: true });
    setActiveLink();
    return () => window.removeEventListener("scroll", setActiveLink);
  }, []);

  const themeLabel = theme === "dark" ? t.nav.toLight : t.nav.toDark;

  return (
    <Navbar
      expand="md"
      fixed="top"
      variant={theme === "dark" ? "dark" : "light"}
      className="site-nav"
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Container fluid className="px-3 px-md-4">
        <Navbar.Brand href="#header">
          <img className="logo" src="/images/portfolio.png" alt="Portfolio logo" />
        </Navbar.Brand>

        {/* Bootstrap swaps this for a close (X) button inside the drawer */}
        <Navbar.Toggle aria-controls="menu-drawer" />

        <Navbar.Offcanvas id="menu-drawer" placement="end" className="site-drawer">
          <Offcanvas.Header closeButton closeVariant={theme === "dark" ? "white" : undefined} />
          <Offcanvas.Body className="d-flex flex-column flex-md-row align-items-md-center justify-content-md-end gap-3">
            <BsNav>
              {data.nav.map((item) => (
                <BsNav.Link
                  key={item.href}
                  href={item.href}
                  active={activeHref === item.href}
                  onClick={() => setExpanded(false)}
                >
                  <i className={`fa ${item.icon}`}></i> {item.label}
                </BsNav.Link>
              ))}
            </BsNav>

            <div className="nav-tools">
              <div className="lang-switch" role="group" aria-label={t.nav.language}>
                {["fi", "en"].map((code) => (
                  <button
                    key={code}
                    type="button"
                    className={lang === code ? "active" : ""}
                    aria-pressed={lang === code}
                    onClick={() => setLang(code)}
                  >
                    {code.toUpperCase()}
                  </button>
                ))}
              </div>
              <button
                type="button"
                className="theme-toggle"
                onClick={toggleTheme}
                title={themeLabel}
                aria-label={themeLabel}
              >
                <i className={`fa-solid ${theme === "dark" ? "fa-sun" : "fa-moon"}`}></i>
              </button>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

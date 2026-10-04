import { useEffect, useState } from "react";
import { Container, Navbar, Nav as BsNav, Offcanvas } from "react-bootstrap";
import { useSettings } from "../i18n/SettingsContext.jsx";
import Controls from "./Controls.jsx";

export default function Nav() {
  const { t, theme, content } = useSettings();
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

  const isDark = theme === "dark";

  return (
    <Navbar
      expand="md"
      fixed="top"
      variant={isDark ? "dark" : "light"}
      className="site-nav"
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Container fluid className="px-3 px-md-4">
        <Navbar.Brand href="#header">
          <img className="logo" src="/images/portfolio.png" alt={t.siteTitle} />
        </Navbar.Brand>

        {/* Language + theme: always visible, also on mobile (before the burger). */}
        <Controls />

        {/* Bootstrap swaps this for a close (X) button inside the drawer */}
        <Navbar.Toggle aria-controls="menu-drawer" aria-label={t.controls.menu} />

        <Navbar.Offcanvas id="menu-drawer" placement="end" className="site-drawer">
          <Offcanvas.Header
            closeButton
            closeLabel={t.controls.closeMenu}
            closeVariant={isDark ? "white" : undefined}
          />
          <Offcanvas.Body>
            <BsNav className="ms-auto">
              {content.nav.map((item) => (
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
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

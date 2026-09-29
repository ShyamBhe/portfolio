import { useEffect, useState } from "react";
import { Container, Navbar, Nav as BsNav, Offcanvas } from "react-bootstrap";
import { nav } from "../data.js";

export default function Nav() {
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

  return (
    <Navbar
      expand="md"
      fixed="top"
      variant="dark"
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
          <Offcanvas.Header closeButton closeVariant="white" />
          <Offcanvas.Body>
            <BsNav className="ms-auto">
              {nav.map((item) => (
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
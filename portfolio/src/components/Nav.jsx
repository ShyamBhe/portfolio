import { useEffect, useRef, useState } from "react";
import { nav } from "../data.js";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#header");
  const menubarRef = useRef(null);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));

    function setActiveLink() {
      let currentId = sections[0]?.id;
      const scrollPos = window.scrollY + window.innerHeight * 0.3;

      for (const section of sections) {
        if (section.offsetTop <= scrollPos) {
          currentId = section.id;
        }
      }

      setActiveHref(`#${currentId}`);
    }

    window.addEventListener("scroll", setActiveLink);
    setActiveLink();
    return () => window.removeEventListener("scroll", setActiveLink);
  }, []);

  return (
    <nav aria-label="navigation menu">
      <img className="logo" src="/images/portfolio.png" alt="logo image" />

      <i className="fa fa-bars" onClick={() => setMenuOpen(true)}></i>

      <ul
        id="menubar"
        role="menubar"
        aria-label="navigation menu"
        ref={menubarRef}
        style={{ right: menuOpen ? "0" : undefined }}
      >
        {nav.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              role="menuitem"
              tabIndex={0}
              className={activeHref === item.href ? "active" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              <i className={`fa ${item.icon}`}></i> {item.label}
            </a>
          </li>
        ))}
        <li>
          <i
            className="fa fa-times"
            style={{ display: menuOpen ? "block" : "none" }}
            onClick={() => setMenuOpen(false)}
          ></i>
        </li>
      </ul>
    </nav>
  );
}

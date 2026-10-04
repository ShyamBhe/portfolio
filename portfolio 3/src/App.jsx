import { useState } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Publications from "./components/Publications.jsx";
import Contact from "./components/Contact.jsx";
import Chatbot from "./components/Chatbot.jsx";
import { useSettings } from "./i18n/SettingsContext.jsx";

export default function App() {
  const { t, content } = useSettings();
  const [cvMessage, setCvMessage] = useState("");

  function handleRequestCv(e) {
    e.preventDefault();

    const confirmed = window.confirm(t.cv.confirm);

    if (confirmed) {
      const subject = encodeURIComponent(t.cv.subject);
      const body = encodeURIComponent(t.cv.body.replace(/\n/g, "\r\n"));
      window.location.href = `mailto:${content.contact.email}?subject=${subject}&body=${body}`;
      setCvMessage(t.cv.yes);
    } else {
      setCvMessage(t.cv.no);
    }

    setTimeout(() => setCvMessage(""), 6000);
  }

  return (
    <>
      <Nav />
      <Hero onRequestCv={handleRequestCv} />
      <About />
      <Projects />
      <Publications />
      <Contact cvMessage={cvMessage} onRequestCv={handleRequestCv} />

      <footer className="footer">
        <span>{t.footer}</span>
      </footer>

      <Chatbot />
    </>
  );
}

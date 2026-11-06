import { useState } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Publications from "./components/Publications.jsx";
import Contact from "./components/Contact.jsx";
import Chatbot from "./components/Chatbot.jsx";
import { contact } from "./data.js";
import { useSettings } from "./SettingsContext.jsx";

export default function App() {
  const { t } = useSettings();
  // Stores a message key ("cvThanks" / "cvNo") so it follows the language.
  const [cvMessage, setCvMessage] = useState("");

  function handleRequestCv(e) {
    e.preventDefault();

    const confirmed = window.confirm(t.app.cvConfirm);

    if (confirmed) {
      window.location.href =
        `mailto:${contact.email}` +
        `?subject=${encodeURIComponent(t.app.mailSubject)}` +
        `&body=${encodeURIComponent(t.app.mailBody)}`;
      setCvMessage("cvThanks");
    } else {
      setCvMessage("cvNo");
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
        <span>{t.app.footer}</span>
      </footer>

      <Chatbot />
    </>
  );
}

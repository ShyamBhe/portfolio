import { useState } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Publications from "./components/Publications.jsx";
import Contact from "./components/Contact.jsx";
import Chatbot from "./components/Chatbot.jsx";
import { contact } from "./data.js";

export default function App() {
  const [cvMessage, setCvMessage] = useState("");

  function handleRequestCv(e) {
    e.preventDefault();

    const confirmed = window.confirm("Do you want to request my CV via email?");

    if (confirmed) {
      window.location.href = `mailto:${contact.email}?subject=Requesting%20Your%20CV&body=Hi Shyam,%0D%0A%0D%0AI would like to request a copy of your CV.%0D%0AThank you!`;
      setCvMessage("Thanks for your interest! Your email app will open to request my CV.");
    } else {
      setCvMessage("No problem! You can request if you need anytime later also.");
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
        <span>
          Personal data presented in this profile and shared with this
          profile is protected and believed to be handled in accordance with
          the European data protection law (GDPR).
        </span>
      </footer>

      <Chatbot />
    </>
  );
}

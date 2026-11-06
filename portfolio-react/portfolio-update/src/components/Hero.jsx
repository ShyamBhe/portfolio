import { Button } from "react-bootstrap";
import { useSettings } from "../SettingsContext.jsx";

export default function Hero({ onRequestCv }) {
  const { t } = useSettings();
  const h = t.hero;

  return (
    <section
      id="header"
      className="hero d-flex align-items-center justify-content-center text-center"
    >
      <div className="header-text">
        <p className="hello-text">
          {h.hello} <span>Shyam (Matti)</span>
        </p>
        <h1>{h.title}</h1>
        <h2>{h.subtitle}</h2>

        <p className="profile-text">{h.profile}</p>

        <div className="d-flex flex-column flex-sm-row justify-content-center gap-2 gap-sm-3 mt-3">
          <Button href="#projects" variant="success">
            {h.viewProjects}
          </Button>
          <Button href="#contact" variant="outline-light" onClick={onRequestCv}>
            {h.requestCv}
          </Button>
          <Button href="#contact" variant="outline-light">
            {h.contactMe}
          </Button>
        </div>

        <div className="proof-row">
          {h.proof.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <p className="location-line">{h.location}</p>
      </div>

      <div className="particles"></div>
    </section>
  );
}

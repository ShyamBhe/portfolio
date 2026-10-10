import { Button } from "react-bootstrap";
import { useSettings } from "../i18n/SettingsContext.jsx";

const PHOTO_SIDE = "left";

export default function Hero({ onRequestCv }) {
  const { t, theme } = useSettings();
  const h = t.hero;

  const photo = "/images/photo_light.png";

  return (
    <section
      id="header"
      className={`hero d-flex align-items-center justify-content-center hero-photo-${PHOTO_SIDE}`}
    >
      <div className="hero-inner">
        <figure className="hero-figure">
          <img
            className="hero-photo"
            alt={h.photoAlt}
            src={photo}
            width="960"
            height="960"
            fetchPriority="high"
          />
        </figure>

        <div className="header-text">
          <p className="hello-text">
            {h.hello} <span>Shyam (Matti, 8+ vuotta Suomessa)</span>
          </p>

          <h1>{h.title}</h1>

          <h2>{h.subtitle}</h2>

          <p className="profile-text">{h.profile}</p>

          <div className="hero-buttons d-flex flex-column flex-sm-row justify-content-center gap-2 gap-sm-3">
            <Button href="#projects" variant="success">
              {h.viewProjects}
            </Button>

            <Button
              href="#contact"
              variant="outline-light"
              className="btn-hero-outline"
              onClick={onRequestCv}
            >
              {h.requestCv}
            </Button>

            <Button
              href="#contact"
              variant="outline-light"
              className="btn-hero-outline"
            >
              {h.contactMe}
            </Button>
          </div>

          <div className="proof-row">
            {h.proof.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <p className="location-line">
            {h.location} &middot; {h.years}
          </p>
        </div>
      </div>

      <div className="particles"></div>
    </section>
  );
}

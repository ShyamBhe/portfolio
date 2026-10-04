export default function Hero({ onRequestCv }) {
  const { t, theme } = useSettings();
  const h = t.hero;

  const photoSrc =
    theme === "dark"
      ? "/images/photo-dark.png"
      : "/images/photo-light.png";

  return (
    <section
      id="header"
      className={`hero d-flex align-items-center justify-content-center text-center hero-photo-${PHOTO_SIDE}`}
    >
      <div className="hero-inner">
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

        <figure className="hero-figure">
          <img
            className="hero-photo"
            src={photoSrc}
            alt={h.photoAlt}
            width="960"
            height="960"
            fetchpriority="high"
          />
        </figure>
      </div>

      <div className="particles"></div>
    </section>
  );
}
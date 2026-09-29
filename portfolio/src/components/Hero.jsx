export default function Hero({ onRequestCv }) {
  return (
    <section id="header">
      <div className="header-text">
        <p className="eyebrow">
          Hi, I'm <span>Shyam</span>
        </p>
        <h1>AI &amp; Software Engineer</h1>
        <h2>
          Building multimodal AI, full-stack software, and intelligent
          systems for real-world applications.
        </h2>

        <p className="profile-text">
          I research and build intelligent software systems that bring AI
          and machine learning models into real-world applications. My work
          combines software engineering, multimodal AI, MLLMs, training
          models, transfer learning, LLMs, computer vision, data, and
          sensor-driven systems to turn complex research ideas into
          practical solutions.
        </p>

        <div className="cta-row">
          <a href="#projects" className="btn btn-success live-link-button">
            View Projects
          </a>
          <a
            href="#contact"
            className="btn btn-outline-light live-link-button"
            onClick={onRequestCv}
          >
            Request CV
          </a>
          <a href="#contact" className="btn btn-outline-light live-link-button">
            Contact Me
          </a>
        </div>

        <div className="proof-row">
          <span>Multimodal AI</span>
          <span>Computer Vision</span>
          <span>AIoT Systems</span>
          <span>Full-Stack</span>
          <span>Applied Research</span>
          <span>3+ Publications</span>
        </div>

        <p className="location-line">Helsinki, Finland &middot; 8 years in Finland</p>
      </div>

      <div className="particles"></div>
    </section>
  );
}

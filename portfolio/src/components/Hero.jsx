import { Button } from "react-bootstrap";

export default function Hero({ onRequestCv }) {
  return (
    <section
      id="header"
      className="hero d-flex align-items-center justify-content-center text-center"
    >
      <div className="header-text">
        <p class="hello-text">Hello World, I'm <span>Shyam (Matti)</span></p>
        <h1>AI &amp; Software Engineer</h1>
        <h2>
          Engineering multimodal AI, full-stack software, and intelligent systems for real-world applications.
        </h2>

        <p className="profile-text">
          "Rapid advancements in AI is changing how the world works.I research and build intelligent software systems that bring AI
          and machine learning models into real-world applications. My work
          combines software engineering, multimodal AI, MLLMs, training
          models, transfer learning, LLMs, computer vision, data, and
          sensor-driven systems to turn complex research ideas into
          practical solutions."
        </p>

        <div className="d-flex flex-column flex-sm-row justify-content-center gap-2 gap-sm-3 mt-3">
          <Button href="#projects" variant="success">
            View Projects
          </Button>
          <Button href="#contact" variant="outline-light" onClick={onRequestCv}>
            Request CV
          </Button>
          <Button href="#contact" variant="outline-light">
            Contact Me
          </Button>
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
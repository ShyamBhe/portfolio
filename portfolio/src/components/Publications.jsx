import { publications, researchGateProfile } from "../data.js";

export default function Publications() {
  return (
    <section id="publications">
      <div className="container mt-3">
        <h2 className="sub-title">
          Publications Based on My Research and Development work
        </h2>
        <p className="about-text">
          Selected research output from my AIoT and machine-vision work at
          the University of Turku. Full text linked where publicly
          available.
        </p>
        <div className="row">
          {publications.map((pub) => (
            <div className="col-lg-4 mt-4" key={pub.id}>
              <div className="card publication-card">
                <div className="card-body">
                  <span className="pub-type">{pub.type}</span>
                  <h5 className="card-title">{pub.title}</h5>
                  <p className="card-text">{pub.text}</p>
                  <div className="text-center">
                    <a
                      href={pub.url}
                      className="btn btn-success live-link-button"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View on ResearchGate
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <a
            href={researchGateProfile}
            className="btn btn-outline-light live-link-button"
            target="_blank"
            rel="noreferrer"
          >
            View Full ResearchGate Profile
          </a>
        </div>
      </div>
    </section>
  );
}

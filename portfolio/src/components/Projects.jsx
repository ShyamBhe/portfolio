import { projects } from "../data.js";

export default function Projects() {
  function handleAction(project) {
    if (project.action.type === "alert") {
      alert(project.action.alertText);
    } else if (project.action.type === "window") {
      window.open(project.action.url, "_blank");
    }
  }

  return (
    <section id="projects">
      <div className="container mt-3">
        <h2 className="sub-title">Projects</h2>
        <div className="row">
          {projects.map((project) => (
            <div className="col-lg-4 mt-4" key={project.id}>
              <div className="card project-card">
                <img
                  className="card-img-top"
                  src={project.image}
                  alt="Card image"
                />
                <div className="card-body">
                  <h4 className="card-title">{project.title}</h4>
                  <p className="card-text">{project.text}</p>
                  <div className="text-center">
                    {project.action.type === "anchor" ? (
                      <a
                        href={project.action.url}
                        className="btn btn-success live-link-button"
                      >
                        {project.action.label}
                      </a>
                    ) : (
                      <button
                        className="btn btn-success live-link-button"
                        onClick={() => handleAction(project)}
                      >
                        {project.action.label}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

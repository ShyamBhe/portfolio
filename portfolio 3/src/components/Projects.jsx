import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useSettings } from "../i18n/SettingsContext.jsx";

export default function Projects() {
  const { t, content } = useSettings();
  const { projects } = content;

  function handleAction(project) {
    if (project.action.type === "alert") {
      alert(project.action.alertText);
    } else if (project.action.type === "window") {
      window.open(project.action.url, "_blank");
    }
  }

  return (
    <section id="projects" className="page-section">
      <Container>
        <h2 className="sub-title">{t.projects.title}</h2>
        <Row className="g-4">
          {projects.map((project) => (
            <Col key={project.id} xs={12} md={6} lg={4}>
              <Card className="project-card h-100">
                <Card.Img variant="top" src={project.image} alt={project.title} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title as="h4">{project.title}</Card.Title>
                  <Card.Text>{project.text}</Card.Text>
                  <div className="mt-auto">
                    {project.action.type === "anchor" ? (
                      <Button variant="success" size="sm" href={project.action.url}>
                        {project.action.label}
                      </Button>
                    ) : (
                      <Button variant="success" size="sm" onClick={() => handleAction(project)}>
                        {project.action.label}
                      </Button>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
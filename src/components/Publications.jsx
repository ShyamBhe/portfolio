import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useSettings } from "../i18n/SettingsContext.jsx";

export default function Publications() {
  const { t, content } = useSettings();
  const { publications, researchGateProfile } = content;

  return (
    <section id="publications" className="page-section">
      <Container>
        <h2 className="sub-title">{t.publications.title}</h2>
        <p className="about-text">
          {t.publications.text}
          {t.publications.titlesNote && (
            <>
              <br />
              <small className="pub-note">{t.publications.titlesNote}</small>
            </>
          )}
        </p>

        <Row className="g-4">
          {publications.map((pub) => (
            <Col key={pub.id} xs={12} md={6} lg={4}>
              <Card className="publication-card h-100 text-start">
                <Card.Body className="d-flex flex-column">
                  <span className="pub-type">{pub.type}</span>
                  <Card.Title as="h5">{pub.title}</Card.Title>
                  <Card.Text>{pub.text}</Card.Text>
                  <div className="mt-auto text-center">
                    <Button
                      variant="success"
                      size="sm"
                      href={pub.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t.publications.view}
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="mt-4">
          <Button
            variant="outline-light"
            className="btn-hero-outline"
            href={researchGateProfile}
            target="_blank"
            rel="noreferrer"
          >
            {t.publications.profile}
          </Button>
        </div>
      </Container>
    </section>
  );
}

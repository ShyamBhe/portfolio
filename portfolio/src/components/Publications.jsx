import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { publications, researchGateProfile } from "../data.js";

export default function Publications() {
  return (
    <section id="publications" className="page-section">
      <Container>
        <h2 className="sub-title">
          Publications Based on My Research and Development work
        </h2>
        <p className="about-text">
          Selected research output from my AIoT and machine-vision work at the
          University of Turku. Full text linked where publicly available.
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
                      View on ResearchGate
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
            href={researchGateProfile}
            target="_blank"
            rel="noreferrer"
          >
            View Full ResearchGate Profile
          </Button>
        </div>
      </Container>
    </section>
  );
}
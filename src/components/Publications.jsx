import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useSettings } from "../i18n/SettingsContext.jsx";

export default function Publications() {
  const { t, content } = useSettings();
  const { publications = [], researchGateProfile } = content;

  // Add extra non-dynamic/article publications if not already in context
  const extraPublications = [
    {
      id: "nepalilainen-ai-employment",
      type: "Article / Media",
      title: "AI is changing the employment landscape: What will a software engineer in Finland do now?",
      text: "AI is changing not only the way we work, but also the nature of jobs and the skills required. But is it taking away jobs, or creating new opportunities? This is a research article by me published in Nepali Lainen, a Finnish media outlet, discussing the impact of AI on the employment sector and providing insights for software engineers in Finland.",
      url: "https://nepalilainen.fi/ai-is-changing-the-employment-sector-what-should-software-engineers-in-finland-do-now/",
      buttonText: "Read Full Article", // Custom dynamic button text for media articles
    },
  ];

  // Merge context publications with additional publications safely
  const allPublications = [
    ...publications,
    ...extraPublications.filter(
      (extra) => !publications.some((p) => p.id === extra.id)
    ),
  ];

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

        {/* lg={3} displays 4 cards in 1 single row on large screens */}
        <Row className="g-4">
          {allPublications.map((pub) => (
            <Col key={pub.id} xs={12} sm={6} lg={3}>
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
                      {pub.buttonText || t?.publications?.view || "View"}
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
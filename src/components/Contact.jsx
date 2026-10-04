import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useSettings } from "../i18n/SettingsContext.jsx";

function encodeFormData(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export default function Contact({ cvMessage, onRequestCv }) {
  const { t, content } = useSettings();
  const { contact } = content;
  const c = t.contact;
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sendStatus, setSendStatus] = useState("");

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setSendStatus(c.sending);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData({ "form-name": "contact", ...form }),
      });
      setSendStatus(c.sent);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setSendStatus(c.failed);
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="page-section">
      <Container>
        <h3 className="mb-4">{c.title}</h3>
        <Row className="g-4 text-start">
          <Col md={5}>
            <h6 className="mb-3">{c.info}</h6>
            <p className="contact-line">
              <i className="far fa-envelope-open"></i>
              {contact.email}
            </p>
            <p className="contact-line">
              <i className="fas fa-phone-square-alt"></i>
              {contact.phone}
            </p>

            <div className="social-icons">
              <p className="w-100 mb-0">{c.social}</p>
              <a
                href={contact.githubPrimary.url}
                target="_blank"
                rel="noreferrer"
                title="Primary GitHub — ShyamBhe"
              >
                <i className="fa-brands fa-github"></i>
                <span className="icon-label">{contact.githubPrimary.label}</span>
              </a>
              <a
                href={contact.githubSecondary.url}
                target="_blank"
                rel="noreferrer"
                title="Secondary GitHub — ShyaBhe"
              >
                <i className="fa-brands fa-github"></i>
                <span className="icon-label">{contact.githubSecondary.label}</span>
              </a>
              <a href={contact.linkedin} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin"></i>
                <span className="icon-label">LinkedIn</span>
              </a>
            </div>

            <Button href="#" variant="success" className="mt-4 px-4" onClick={onRequestCv}>
              {c.requestCv}
            </Button>
            <p className="text-success mt-2">{cvMessage}</p>
          </Col>

          <Col md={7}>
            <Form
              name="contact"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  {c.honeypot} <input name="bot-field" />
                </label>
              </p>

              <Form.Control
                className="mb-3"
                type="text"
                name="name"
                placeholder={c.name}
                required
                value={form.name}
                onChange={handleChange}
              />
              <Form.Control
                className="mb-3"
                type="email"
                name="email"
                placeholder={c.email}
                required
                value={form.email}
                onChange={handleChange}
              />
              <Form.Control
                className="mb-3"
                as="textarea"
                rows={6}
                name="message"
                placeholder={c.message}
                required
                value={form.message}
                onChange={handleChange}
              />

              <Button type="submit" variant="success" className="px-4" disabled={sending}>
                {sending ? c.sending : c.send}
              </Button>
              <span className="txt">{sendStatus}</span>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
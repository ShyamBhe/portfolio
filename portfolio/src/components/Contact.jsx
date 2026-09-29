import { useState } from "react";
import { contact } from "../data.js";

function encodeFormData(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export default function Contact({ cvMessage, onRequestCv }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sendStatus, setSendStatus] = useState("");

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setSendStatus("Sending...");

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData({ "form-name": "contact", ...form }),
      });
      setSendStatus("Message sent — thank you!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setSendStatus("Something went wrong — please email me directly.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact">
      <div className="container">
        <h3 className="text-center text-white">Contact Me</h3>
        <div className="contact-container">
          <div className="content-left">
            <h6 className="title">Contact Info</h6>
            <p>
              <i className="far fa-envelope-open"></i>
              {contact.email}
            </p>
            <p>
              <i className="fas fa-phone-square-alt"></i>
              {contact.phone}
            </p>

            <div className="social-icons">
              <p>GitHub &amp; LinkedIn</p>
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

            <a href="#" className="btn btn-primary" onClick={onRequestCv}>
              Request CV
            </a>

            <p style={{ marginTop: "10px", color: "lightgreen" }}>{cvMessage}</p>
          </div>

          <div className="content-right">
            <form name="contact" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don&apos;t fill this out:
                  <input name="bot-field" />
                </label>
              </p>

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={form.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={handleChange}
              />
              <textarea
                name="message"
                rows={6}
                placeholder="Message"
                required
                value={form.message}
                onChange={handleChange}
              ></textarea>

              <button type="submit" className="btn btn-primary" disabled={sending}>
                {sending ? "Sending..." : "Send Email"}
              </button>
              <span className="txt">{sendStatus}</span>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

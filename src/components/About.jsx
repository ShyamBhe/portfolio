import { useState } from "react";
import { Container } from "react-bootstrap";
import { useSettings } from "../i18n/SettingsContext.jsx";

export default function About() {
  const { t, content } = useSettings();
  const [activeTab, setActiveTab] = useState("skills");

  const tabs = [
    {
      id: "skills",
      icon: "fa-code",
      items: content.skills || [],
    },
    {
      id: "experiences",
      icon: "fa-briefcase",
      items: content.experience || [],
    },
    {
      id: "education",
      icon: "fa-graduation-cap",
      items: content.education || [],
    },
    {
      id: "recommendations",
      icon: "fa-comments",
      items: content.recommendations || [],
    },
  ];

  const current = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <section id="about" className="page-section">
      <Container>
        <h2 className="sub-title">{t.about.title}</h2>

        <p className="about-text">{t.about.text}</p>

        <div className="tab-titles" role="tablist" aria-label="About sections">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              id={`about-tab-${tab.id}`}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls="about-tab-panel"
              className={`tab-links${
                activeTab === tab.id ? " active-link" : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <i className={`fa-solid ${tab.icon}`} aria-hidden="true" />{" "}
              {t.about.tabs?.[tab.id] ||
                (tab.id === "recommendations"
                  ? "Recommendations"
                  : tab.id.charAt(0).toUpperCase() + tab.id.slice(1))}
              <i
                className="fa-solid fa-chevron-down tab-arrow"
                aria-hidden="true"
              />
            </button>
          ))}
        </div>

        <div
          id="about-tab-panel"
          className="tab-list"
          role="tabpanel"
          aria-labelledby={`about-tab-${activeTab}`}
          tabIndex={0}
        >
          {activeTab === "recommendations" ? (
            <>
              {current.items.length > 0 ? (
                <div className="recommendations-list">
                  {current.items.map((item, idx) => (
                    <article
                      className="recommendation-card mb-3"
                      key={item.author || idx}
                    >
                      <h3 className="recommendation-author h5 mb-1">
                        {item.author}
                      </h3>

                      <span className="recommendation-meta">
                        {item.title || ""}
                        {item.title && item.organization ? " · " : ""}
                        {item.organization || ""}
                      </span>

                      {item.text && (
                        <div className="recommendation-quote mt-3">
                          {item.text.split("\n\n").map((paragraph, pIdx) => (
                            <p key={pIdx} className="mb-3">
                              “{paragraph}”
                            </p>
                          ))}
                        </div>
                      )}

                      {item.email && (
                        <div className="recommendation-contact">
                          <a
                            href={`mailto:${item.email}`}
                            className="recommendation-contact-link"
                            aria-label={`Email ${item.author} at ${item.email}`}
                          >
                            <i
                              className="fa-solid fa-envelope"
                              aria-hidden="true"
                            />
                            Email: {item.email}
                          </a>
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              ) : (
                <p className="about-item-text">No recommendations available.</p>
              )}

              <div className="recommendation-footer">
                <p className="recommendation-meta mb-2">
                  Recommendations are publicly available on Linkedin
                </p>

                <a
                  href="https://www.linkedin.com/in/rshyam-bhetuwal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-recommendations-button"
                >
                  <i className="fa-brands fa-linkedin" aria-hidden="true" />
                  LinkedIn Recommendations
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </>
          ) : activeTab === "experiences" ? (
            <>
              <ul className="list-unstyled mb-0">
                {current.items.map((item, idx) => (
                  <li key={item.label ?? item.period ?? idx}>
                    <strong className="experience-date">
                      {item.label ?? item.period}
                    </strong>

                    <span className="about-item-text d-block mt-1">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>

              <section
                className="certificate-panel"
                aria-labelledby="certificates-heading"
              >
                <h3
                  id="certificates-heading"
                  className="about-section-heading h5 fw-bold mb-2"
                >
                  <i
                    className="fa-solid fa-shield-halved about-accent me-2"
                    aria-hidden="true"
                  />
                  Early career Work Certificates
                </h3>
                <a
                  href="/OtherWorkCertificates_.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-button"
                >
                  <i className="fa-solid fa-file-pdf" aria-hidden="true" />
                  View Work Certificates (PDF)
                  <span aria-hidden="true">↗</span>
                </a>
              </section>
            </>
          ) : (
            <ul className="list-unstyled mb-0">
              {current.items.map((item, idx) => (
                <li key={item.label ?? item.period ?? idx}>
                  <strong className="experience-date">
                    {item.label ?? item.period}
                  </strong>

                  <span className="about-item-text d-block mt-1">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>
    </section>
  );
}

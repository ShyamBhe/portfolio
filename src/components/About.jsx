import { useState } from "react";
import { Container } from "react-bootstrap";
import { useSettings } from "../i18n/SettingsContext.jsx";

const DEFAULT_RECOMMENDATIONS = [
  {
    author: "Kirsi Laitinen",
    title: "Professor, Institute of Biomedicine and Director, Nutrition and Food Research Center",
    organization: "Faculty of Medicine, University of Turku",
    text: "I had the opportunity to work with Mr. Bhetuwal in the Flavoria Flex project at the University of Turku. He contributed to the development of AI-driven solutions integrating machine learning, data analytics, and sensing technologies. He demonstrated strong technical skills, a research-oriented approach, and the ability to work effectively in multidisciplinary teams. His work also contributed to scientific publications. I recommend him for positions in AI, software engineering, and research and development.",
  },
  {
    author: "Tuomas Mäkilä",
    title: "Assistant Professor of Digital Transformation",
    organization: "University of Turku",
    text: "I supervised Shyam Bhetuwal's Master's thesis and his research and development work in the Business Finland-funded Flavoria Flex project at the University of Turku. Throughout this work, Shyam has demonstrated a strong ability to bridge applied AI research with practical software engineering, contributing across the R&D lifecycle, including research, AI model evaluation, full-stack development, data pipelines, system integration, and real-world testing.\n\nA particularly noteworthy aspect of his work was his contribution to developing approaches for validating and correcting AI-generated food predictions using contextual, standardized, and ground-truth data. This work demonstrated his ability to combine research-oriented thinking with practical technical implementation. His contributions have also resulted in three scientific publications, two of which he led as first author.\n\nShyam is highly self-motivated, research-oriented, technically capable, and effective in interdisciplinary collaboration. He combines strong software engineering skills with a solid understanding of AI and machine learning, as well as the ability to approach complex problems systematically and develop practical solutions.\n\nI strongly recommend Shyam for positions as a Project Researcher, Full-Stack Developer, Software Engineer, or AI/ML Engineer, particularly in areas combining applied AI, intelligent systems, software engineering, and research and development. I am confident that his technical skills, research capabilities, and ability to work effectively across disciplines will enable him to make valuable contributions in both academic research and practical development work.",
  },
];

export default function About() {
  const { t, content, theme } = useSettings();
  const [activeTab, setActiveTab] = useState("skills");

  const recommendationsList = content.recommendations || DEFAULT_RECOMMENDATIONS;

  const tabs = [
    { id: "skills", icon: "fa-code", items: content.skills },
    { id: "experiences", icon: "fa-briefcase", items: content.experience },
    { id: "education", icon: "fa-graduation-cap", items: content.education },
    { id: "recommendations", icon: "fa-comments", items: recommendationsList },
  ];

  const current = tabs.find((tab) => tab.id === activeTab);
  const btnVariant = theme === "dark" ? "outline-light" : "outline-dark";

  return (
    <section id="about" className="page-section">
      <Container>
        <h2 className="sub-title">{t.about.title}</h2>
        <p className="about-text">{t.about.text}</p>

        <div className="tab-titles" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`tab-links${activeTab === tab.id ? " active-link" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <i className={`fa-solid ${tab.icon}`}></i>{" "}
              {t.about.tabs?.[tab.id] ||
                (tab.id === "recommendations" ? "Recommendations" : tab.id)}
              <i className="fa-solid fa-chevron-down tab-arrow"></i>
            </button>
          ))}
        </div>

        <ul className="list-unstyled tab-list" role="tabpanel">
          {activeTab === "recommendations" ? (
            <>
              {current.items.map((item, idx) => (
                <li key={item.author || idx} className="mb-4">
                  {/* Title/Author in Red */}
                  <span
                    className="fw-bold fs-5"
                    style={{ color: "#ff004f" }}
                  >
                    {item.author}
                  </span>{" "}
                  {/* Subtitle/Organization in Whitish */}
                  <small
                    className="fw-normal"
                    style={{
                      color: theme === "dark" ? "#e0e0e0" : "#6c757d",
                    }}
                  >
                    {item.title ? `· ${item.title}` : ""}{" "}
                    {item.organization ? `(${item.organization})` : ""}
                  </small>
                  <br />
                  {/* Quote Body in Light Gray */}
                  <span
                    className="fst-italic d-inline-block mt-2"
                    style={{
                      whiteSpace: "pre-line",
                      color: theme === "dark" ? "#ababab" : "#4a4a4a",
                    }}
                  >
                    "{item.text}"
                  </span>
                </li>
              ))}

              {/* Embedded Screenshot & LinkedIn Profile Link at Bottom */}
              <li className="mt-5 pt-4 border-top">
                <h5
                  className="fw-bold mb-3 d-flex align-items-center gap-2"
                  style={{ color: "#ff004f" }}
                >
                  <i className="fa-solid fa-circle-check text-success"></i> Recommendations
                </h5>

                <div className="mb-4">
                  <img
                    src="/images/Reco.png"
                    alt="Recommendations"
                    className="img-fluid rounded border shadow-sm"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>

                {/* Bottom LinkedIn Button */}
                <div className="pt-2">
                  <a
                    href="https://www.linkedin.com/in/rshyam-bhetuwal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btn-sm ${btnVariant} d-inline-flex align-items-center gap-2`}
                  >
                    <i className="fa-brands fa-linkedin"></i> View Full Recommendations on LinkedIn ↗
                  </a>
                </div>
              </li>
            </>
          ) : (
            current.items.map((item) => (
              <li key={item.label ?? item.period} className="mb-3">
                {/* Title / Period in Red */}
                <span
                  className="fw-bold"
                  style={{ color: "#ff004f" }}
                >
                  {item.label ?? item.period}
                </span>
                <br />
                {/* Subtitle Details in Whitish */}
                <span style={{ color: theme === "dark" ? "#ababab" : "#4a4a4a" }}>
                  {item.text}
                </span>
              </li>
            ))
          )}
        </ul>
      </Container>
    </section>
  );
}
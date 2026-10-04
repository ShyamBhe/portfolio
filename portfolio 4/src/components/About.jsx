import { useState } from "react";
import { Container } from "react-bootstrap";
import { useSettings } from "../i18n/SettingsContext.jsx";

export default function About() {
  const { t, content } = useSettings();
  const [activeTab, setActiveTab] = useState("skills");

  const tabs = [
    { id: "skills", icon: "fa-code", items: content.skills },
    { id: "experiences", icon: "fa-briefcase", items: content.experience },
    { id: "education", icon: "fa-graduation-cap", items: content.education },
  ];
  const current = tabs.find((tab) => tab.id === activeTab);

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
              <i className={`fa-solid ${tab.icon}`}></i> {t.about.tabs[tab.id]}
              <i className="fa-solid fa-chevron-down tab-arrow"></i>
            </button>
          ))}
        </div>

        <ul className="list-unstyled tab-list" role="tabpanel">
          {current.items.map((item) => (
            <li key={item.label ?? item.period}>
              <span>{item.label ?? item.period}</span>
              <br />
              {item.text}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

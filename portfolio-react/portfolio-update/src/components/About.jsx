import { useState } from "react";
import { Container } from "react-bootstrap";
import { useSettings } from "../SettingsContext.jsx";

export default function About() {
  const { t, data } = useSettings();
  const [activeTab, setActiveTab] = useState("skills");

  const tabs = [
    { id: "skills", icon: "fa-code", label: t.about.tabs.skills, items: data.skills },
    { id: "experiences", icon: "fa-briefcase", label: t.about.tabs.experiences, items: data.experience },
    { id: "education", icon: "fa-graduation-cap", label: t.about.tabs.education, items: data.education },
  ];
  const current = tabs.find((tab) => tab.id === activeTab);

  return (
    <section id="about" className="page-section">
      <Container>
        <h2 className="sub-title">{t.about.title}</h2>
        <p className="about-text">{t.about.intro}</p>

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
              <i className={`fa-solid ${tab.icon}`}></i> {tab.label}
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

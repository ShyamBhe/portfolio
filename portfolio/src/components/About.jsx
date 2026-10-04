import { useState } from "react";
import { Container } from "react-bootstrap";
import { skills, experience, education } from "../data.js";

const TABS = [
  { id: "skills", icon: "fa-code", label: "Skills", items: skills },
  { id: "experiences", icon: "fa-briefcase", label: "Experiences", items: experience },
  { id: "education", icon: "fa-graduation-cap", label: "Education", items: education },
];

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");
  const current = TABS.find((t) => t.id === activeTab);

  return (
    <section id="about" className="page-section">
      <Container>
        <h2 className="sub-title">About Myself</h2>
        <p className="about-text">
          I am working as Lead AI and Software Engineer and graduated with a Master&rsquo;s
          Degree in Software and AI Data Engineering from the University of Turku.
        </p>

        <div className="tab-titles" role="tablist">
          {TABS.map((tab) => (
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
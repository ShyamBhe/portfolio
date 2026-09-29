import { useState } from "react";
import { skills, experience, education } from "../data.js";

const TABS = [
  { id: "skills", icon: "fa-code", label: "Skills" },
  { id: "experiences", icon: "fa-briefcase", label: "Experiences" },
  { id: "education", icon: "fa-graduation-cap", label: "Education" },
];

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section id="about">
      <div className="about-row">
        <div className="about-col-2">
          <h2 className="sub-title">About Myself</h2>
          <p className="about-text">
            I am working as Lead AI Engineer and graduated with a Master&rsquo;s
            Degree in Software and AI Engineering from the University of
            Turku.
          </p>

          <div className="tab-titles">
            {TABS.map((tab) => (
              <p
                key={tab.id}
                className={`tab-links${activeTab === tab.id ? " active-link" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <i className={`fa-solid ${tab.icon}`}></i> {tab.label}
                <i className="fa-solid fa-chevron-down tab-arrow"></i>
              </p>
            ))}
          </div>

          <div
            className={`tab-contents${activeTab === "skills" ? " active-tab" : ""}`}
          >
            <ul>
              {skills.map((item) => (
                <li key={item.label}>
                  <span>{item.label}</span>
                  <br />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`tab-contents${activeTab === "experiences" ? " active-tab" : ""}`}
          >
            <ul>
              {experience.map((item) => (
                <li key={item.period}>
                  <span>{item.period}</span>
                  <br />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`tab-contents${activeTab === "education" ? " active-tab" : ""}`}
          >
            <ul>
              {education.map((item) => (
                <li key={item.period}>
                  <span>{item.period}</span>
                  <br />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

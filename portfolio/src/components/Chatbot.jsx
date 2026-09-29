import { useState, useEffect } from "react";
import ChatBot from "react-chatbotify";
import {
  skills,
  experience,
  education,
  projects,
  publications,
  contact,
} from "../data.js";

const GREETING =
  "Hi! 👋 I'm Shyam's portfolio assistant. I can tell you about his skills, experience, education, projects, research, publications, and contact information. What would you like to know?";

const RESEARCHGATE =
  "https://www.researchgate.net/profile/Shyam-Bhetuwal";

// ------------------------------------------------------------
// Robot avatar
// ------------------------------------------------------------
const ROBOT =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <circle cx="32" cy="32" r="32" fill="#0b1f14"/>
    <rect x="16" y="22" width="32" height="26" rx="8" fill="#2ecc71"/>
    <circle cx="25" cy="34" r="4" fill="#06210f"/>
    <circle cx="39" cy="34" r="4" fill="#06210f"/>
    <rect x="26" y="42" width="12" height="3" rx="1.5" fill="#06210f"/>
    <line x1="32" y1="22" x2="32" y2="14" stroke="#2ecc71" stroke-width="3"/>
    <circle cx="32" cy="12" r="3" fill="#2ecc71"/>
  </svg>`);

// ------------------------------------------------------------
// Menu
// ------------------------------------------------------------
const MENU = [
  "Skills",
  "Experience",
  "Projects",
  "Research",
  "Publications",
  "Contact",
];

// ------------------------------------------------------------
// Whole-word / whole-phrase matching
// ------------------------------------------------------------
function escapeRegex(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function contains(input, words) {
  return words.some((word) =>
    new RegExp(
      `(?<![a-z0-9])${escapeRegex(word)}(?![a-z0-9])`,
      "i"
    ).test(input)
  );
}

function projectById(id) {
  return projects.find((p) => p.id === id);
}

function projectAnswer(id, extra) {
  const project = projectById(id);

  if (!project) {
    return "I couldn't find that project in the portfolio data.";
  }

  return (
    `${project.title}\n\n${project.text}` +
    (extra ? `\n\n${extra}` : "")
  );
}

// ============================================================
// ANSWER ENGINE
// ============================================================
function getAnswer(question) {
  const input = question.toLowerCase().trim();

  // ---------------- SKILLS ----------------
  if (
    contains(input, [
      "skill",
      "skills",
      "technology",
      "technologies",
      "tech stack",
      "stack",
      "programming",
      "programming language",
      "framework",
      "frameworks",
      "technical",
    ])
  ) {
    return (
      "Shyam's technical background includes:\n\n" +
      skills.map((s) => `• ${s.label}: ${s.text}`).join("\n")
    );
  }

  // ---------------- EXPERIENCE ----------------
  if (
    contains(input, [
      "experience",
      "work experience",
      "career",
      "employment",
      "worked",
      "work history",
      "professional experience",
      "job",
      "jobs",
      "roles",
    ])
  ) {
    return (
      "Shyam's professional experience includes:\n\n" +
      experience.map((i) => `• ${i.period} — ${i.text}`).join("\n")
    );
  }

  // ---------------- MASTER'S THESIS ----------------
  if (
    contains(input, [
      "master thesis",
      "master's thesis",
      "masters thesis",
      "thesis topic",
      "thesis title",
    ])
  ) {
    return (
      "Shyam's Master's thesis at the University of Turku was:\n\n" +
      '"Comparing the Accuracy and Efficiency of Existing AI Based Food Detection Tools"\n\n' +
      "The work focused on AI-based food detection and the development of an automated AIoT-based platform."
    );
  }

  // ---------------- EDUCATION ----------------
  if (
    contains(input, [
      "education",
      "degree",
      "degrees",
      "university",
      "universities",
      "master",
      "master's",
      "masters",
      "bachelor",
      "bachelor's",
      "thesis",
      "study",
      "studied",
    ])
  ) {
    return (
      "Shyam's academic background:\n\n" +
      education.map((i) => `• ${i.period}\n  ${i.text}`).join("\n\n")
    );
  }

  // ---------------- FLAVORIA / AIoT ----------------
  if (
    contains(input, [
      "flavoria",
      "flavoria flex",
      "calorie",
      "food detection",
      "food recognition",
      "food ai",
      "aiot",
      "machine vision",
      "machine vision system",
      "nutrition",
      "nutrient",
      "hospital",
      "restaurant",
    ])
  ) {
    return projectAnswer(
      "calorie-tracking",
      "This work is associated with Shyam's research and publications on AI-powered food detection, analysis, and real-world validation."
    );
  }

  // ---------------- MENTAL HEALTH ----------------
  if (
    contains(input, [
      "mental health",
      "mental-health",
      "healthcare ai",
      "health ai",
      "health care",
      "patient ai",
      "nlp",
      "voice sensor",
      "heart rate",
    ])
  ) {
    return projectAnswer(
      "mental-health",
      "Some implementation details cannot be disclosed because this is an ongoing research and potentially patented project."
    );
  }

  // ---------------- COUNTRY FINDER ----------------
  if (
    contains(input, [
      "country finder",
      "country app",
      "country application",
      "country chatbot",
      "country ai",
      "countries",
    ])
  ) {
    return projectAnswer(
      "country-finder",
      "Technologies include React, OpenAI, Gemini, React Hooks, CSS, APIs, and interactive maps."
    );
  }

  // ---------------- ECOMMERCE ----------------
  if (
    contains(input, [
      "ecommerce",
      "e-commerce",
      "online shop",
      "shop",
      "shopping",
      "tshirt",
      "t-shirt",
    ])
  ) {
    return projectAnswer("ecommerce");
  }

  // ---------------- DIGITAL REPOSITORY ----------------
  if (
    contains(input, [
      "digital repository",
      "national repository",
      "repository",
      "thesis repository",
    ])
  ) {
    return projectAnswer("digital-repo");
  }

  // ---------------- LIBRARY SYSTEM ----------------
  if (
    contains(input, [
      "library management",
      "library system",
      "library application",
      "c# project",
      ".net project",
    ])
  ) {
    return projectAnswer("library-system");
  }

  // ---------------- PROJECTS ----------------
  if (
    contains(input, [
      "project",
      "projects",
      "built",
      "developed",
      "applications",
      "apps",
      "portfolio projects",
    ])
  ) {
    return (
      "Shyam's main projects include:\n\n" +
      projects.map((p) => `• ${p.title} — ${p.text}`).join("\n\n")
    );
  }

  // ---------------- PUBLICATIONS ----------------
  if (
    contains(input, [
      "publication",
      "publications",
      "paper",
      "papers",
      "research paper",
      "research papers",
      "published",
      "research",
      "researchgate",
      "conference",
    ])
  ) {
    return (
      `Shyam currently has ${publications.length} publications listed in the portfolio:\n\n` +
      publications
        .map((p) => `• ${p.title}\n${p.type}\n${p.text}`)
        .join("\n\n") +
      `\n\nResearchGate: ${RESEARCHGATE}`
    );
  }

  // ---------------- CONTACT ----------------
  if (
    contains(input, [
      "contact",
      "contact information",
      "email",
      "e-mail",
      "reach",
      "reach him",
      "get in touch",
      "hire",
      "hiring",
      "linkedin",
      "github",
      "cv",
      "resume",
    ])
  ) {
    return (
      "You can contact Shyam through:\n\n" +
      `• Email: ${contact.email}\n` +
      `• Phone: ${contact.phone}\n` +
      `• LinkedIn: ${contact.linkedin}\n` +
      `• GitHub: ${contact.githubPrimary.url}\n\n` +
      "You can also use the Contact section of the portfolio."
    );
  }

  // ---------------- BACKGROUND / FIT ----------------
  if (
    contains(input, [
      "suitable",
      "fit for",
      "good fit",
      "qualified",
      "right for",
      "suited",
      "background",
    ])
  ) {
    return (
      "Here is the relevant background:\n\n" +
      "• AI and machine learning\n" +
      "• Full-stack software development\n" +
      "• Computer vision and machine vision\n" +
      "• Multimodal and AIoT systems\n" +
      "• Research and applied AI\n" +
      `• ${publications.length} publications listed in the portfolio\n` +
      "• Experience across university research, R&D, freelance development, and software projects\n\n" +
      "Explore the Experience, Projects, Skills, and Publications sections for more details."
    );
  }

  // ---------------- GREETING ----------------
  if (
    contains(input, [
      "hello",
      "hi",
      "hey",
      "good morning",
      "good evening",
    ])
  ) {
    return GREETING;
  }

  // ---------------- DEFAULT ----------------
  return (
    "I can help with questions about:\n\n" +
    "• Skills & technologies\n" +
    "• Experience\n" +
    "• Education & Master's thesis\n" +
    "• AI/ML projects\n" +
    "• Flavoria Flex / AIoT research\n" +
    "• Publications\n" +
    "• Contact information\n\n" +
    'Try asking: "Tell me about the Flavoria project."'
  );
}

// ============================================================
// CHATBOT FLOW
// ============================================================

const flow = {
  start: {
    message: GREETING,
    options: MENU,
    path: "answer",
  },

  answer: {
    message: (params) => getAnswer(params.userInput),

    transition: {
      duration: 0,
    },

    path: "continue",
  },

  continue: {
    message: "What else would you like to know?",
    options: MENU,
    path: "answer",
  },
};

// ============================================================
// CHATBOT SETTINGS
// ============================================================

const settings = {
  general: {
    primaryColor: "#2ecc71",
    secondaryColor: "#0b1f14",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    showHeader: true,
    showFooter: false,
    showInputRow: true,
    embedded: false,
  },

  tooltip: {
    mode: "NEVER",
  },

  header: {
    title: "Shyam's AI Assistant",
    subtitle: "Portfolio • Research • Projects",
    avatar: ROBOT,
  },

  botBubble: {
    showAvatar: true,
    avatar: ROBOT,
  },

  chatButton: {
    icon: ROBOT,
  },

  // Disable notification/unread badge
  notification: {
    disabled: true,
  },

  chatInput: {
    enabledPlaceholderText: "Ask about Shyam...",
  },
};

// ============================================================
// CHATBOT STYLES
// ============================================================

const styles = {
  chatWindowStyle: {
    width: "360px",
    height: "620px",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 18px 45px rgba(0, 0, 0, 0.45)",
  },

  headerStyle: {
    background: "linear-gradient(135deg, #0b1f14, #123d25)",
    color: "#ffffff",
  },

  bodyStyle: {
    background: "#07130d",
  },

  botBubbleStyle: {
    background: "#10251a",
    color: "#f4fff7",
    border: "1px solid rgba(46, 204, 113, 0.15)",
    borderRadius: "14px",
  },

  userBubbleStyle: {
    background: "#2ecc71",
    color: "#06210f",
    borderRadius: "14px",
  },

  botOptionStyle: {
    background: "transparent",
    color: "#2ecc71",
    border: "1px solid rgba(46, 204, 113, 0.5)",
    borderRadius: "20px",
  },

  botOptionHoveredStyle: {
    background: "#2ecc71",
    color: "#06210f",
  },

  chatInputContainerStyle: {
    background: "#0b1f14",
    borderTop: "1px solid rgba(255,255,255,0.08)",
  },

  chatInputAreaStyle: {
    background: "#10251a",
    color: "#ffffff",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "12px",
  },

  sendButtonStyle: {
    background: "#2ecc71",
    color: "#06210f",
  },

  chatButtonStyle: {
    background: "#2ecc71",
    color: "#06210f",
    boxShadow: "0 8px 24px rgba(46, 204, 113, 0.35)",
  },

  chatButtonHoveredStyle: {
    background: "#35d47a",
  },
};

// ============================================================
// COMPONENT
// ============================================================

export default function Chatbot() {
  const [chatKey, setChatKey] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // Clear any old react-chatbotify session data.
  // This removes the old unread "4" state.
  useEffect(() => {
    Object.keys(sessionStorage)
      .filter((key) => key.startsWith("rcb"))
      .forEach((key) => sessionStorage.removeItem(key));
  }, []);

  // Track chatbot open/closed state
  useEffect(() => {
    const onToggle = (event) => {
      const data = event?.data ?? event?.detail ?? {};

      if (typeof data.newState === "boolean") {
        setIsOpen(data.newState);
      } else if (typeof data.currentState === "boolean") {
        setIsOpen(!data.currentState);
      } else {
        setIsOpen((prev) => !prev);
      }
    };

    window.addEventListener("rcb-toggle-chat-window", onToggle);

    return () => {
      window.removeEventListener(
        "rcb-toggle-chat-window",
        onToggle
      );
    };
  }, []);

  // Start a completely new chat
  function startNewChat() {
    Object.keys(sessionStorage)
      .filter((key) => key.startsWith("rcb"))
      .forEach((key) => sessionStorage.removeItem(key));

    setChatKey((previous) => previous + 1);
    setIsOpen(false);
  }

  return (
    <div style={{ position: "relative" }}>
      <ChatBot
        key={chatKey}
        id="shyam-portfolio-assistant"
        flow={flow}
        settings={settings}
        styles={styles}
      />

      {/* New chat button */}
      {isOpen && (
        <button
          type="button"
          onClick={startNewChat}
          title="Start a new chat"
          aria-label="Start a new chat"
          style={{
            position: "fixed",
            right: "24px",
            bottom: "92px",
            zIndex: 9999,
            width: "38px",
            height: "38px",
            borderRadius: "50%",
            border: "1px solid rgba(46, 204, 113, 0.45)",
            background: "#0b1f14",
            color: "#2ecc71",
            cursor: "pointer",
            fontSize: "18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 6px 18px rgba(0, 0, 0, 0.3)",
          }}
        >
          ↻
        </button>
      )}
    </div>
  );
}
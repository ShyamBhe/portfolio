import { useEffect, useRef, useState } from "react";
import { skills, experience, projects, publications, contact } from "../data.js";

const GREETING =
  "Hi! I'm a quick FAQ assistant for Shyam's portfolio. Ask me about his skills, experience, projects, publications, or how to get in touch — or tap a suggestion below.";

const FALLBACK =
  "I don't have a canned answer for that yet — for anything specific, the best move is to use the Contact Me section below, or email " +
  contact.email +
  " directly.";

const QUICK_REPLIES = [
  { label: "Skills", key: "skills" },
  { label: "Experience", key: "experience" },
  { label: "Top project", key: "project" },
  { label: "Publications", key: "publications" },
  { label: "Contact info", key: "contact" },
];

// Keyword -> answer builder. Kept intentionally simple and literal: this
// bot only ever states facts pulled from data.js, so it can never say
// something about Shyam that isn't already on the page.
function buildAnswer(rawInput) {
  const input = rawInput.toLowerCase();

  const matches = (words) => words.some((w) => input.includes(w));

  if (matches(["skill", "tech", "stack", "language", "framework"])) {
    const top = skills
      .slice(0, 3)
      .map((s) => s.label)
      .join(", ");
    return `Shyam's core areas include ${top}, plus data science and AI/ML libraries. Check the About > Skills tab for the full breakdown.`;
  }

  if (matches(["experience", "work", "job", "career", "role"])) {
    const latest = experience[0];
    return `Most recently: ${latest.text} (${latest.period}). He has ${experience.length} roles listed in the About > Experience tab, spanning research, freelance, and industry R&D.`;
  }

  if (matches(["education", "degree", "university", "study", "studied", "school"])) {
    return "Shyam holds a Master's in IT Engineering (Advanced Software Engineering with Data Science) from the University of Turku, and a Bachelor's in IT Engineering from Oulu University of Applied Sciences. Full details are in About > Education.";
  }

  if (matches(["project", "built", "build", "app", "portfolio piece"])) {
    const p = projects[0];
    return `A standout project: "${p.title}" — ${p.text} See the full list in the Projects section below.`;
  }

  if (matches(["publication", "paper", "research", "researchgate", "published"])) {
    const p = publications[0];
    return `Shyam has ${publications.length} conference publications, including "${p.title}". Full text is linked from the Publications section — or view his full ResearchGate profile from there.`;
  }

  if (matches(["contact", "email", "phone", "reach", "hire", "cv", "resume", "linkedin", "github"])) {
    return `You can reach Shyam at ${contact.email} or via the Contact Me form below. LinkedIn and GitHub links are also in that section, and there's a "Request CV" button in the hero and contact area.`;
  }

  if (matches(["hello", "hi", "hey"])) {
    return GREETING;
  }

  
  if (matches(["suitable", "fit for", "good fit", "qualified", "right for", "hire", "suited"])) {
    const relevantSkills = skills
      .slice(0, 4)
      .map((s) => s.label)
      .join(", ");
    return (
      `I'll leave the judgment call to you, but here's the relevant evidence: ` +
      `background in ${relevantSkills}; hands-on AI/ML work including "${projects[0].title}" ` +
      `(tested in real hospital and restaurant settings); ${publications.length} peer-reviewed ` +
      `publications in applied AI/computer vision. Full detail is in the About, Projects, and ` +
      `Publications sections, or reach out directly via Contact Me.`
    );
  }

  return FALLBACK;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ from: "bot", text: GREETING }]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  function sendMessage(text) {
    const trimmed = text.trim();
    if (!trimmed) return;

    const answer = buildAnswer(trimmed);
    setMessages((prev) => [
      ...prev,
      { from: "user", text: trimmed },
      { from: "bot", text: answer },
    ]);
    setInput("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    sendMessage(input);
  }

  return (
    <div className="chatbot-root">
      {open && (
        <div className="chatbot-panel">
          <div className="chatbot-header">
            <span>Ask about Shyam</span>
            <button
              className="chatbot-close"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              <i className="fa fa-times"></i>
            </button>
          </div>

          <div className="chatbot-messages" ref={scrollRef}>
            {messages.map((m, i) => (
              <div key={i} className={`chatbot-message chatbot-message-${m.from}`}>
                {m.text}
              </div>
            ))}
          </div>

          <div className="chatbot-quick-replies">
            {QUICK_REPLIES.map((qr) => (
              <button key={qr.key} onClick={() => sendMessage(qr.label)}>
                {qr.label}
              </button>
            ))}
          </div>

          <form className="chatbot-input-row" onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              placeholder="Ask a question..."
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" aria-label="Send">
              <i className="fa fa-paper-plane"></i>
            </button>
          </form>
        </div>
      )}

      <button
        className="chatbot-toggle"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close chat" : "Open chat"}
      >
        <i className={`fa ${open ? "fa-times" : "fa-comment-dots"}`}></i>
      </button>
    </div>
  );
}

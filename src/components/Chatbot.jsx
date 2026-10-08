import { useState, useEffect, useMemo, useRef } from "react";
import ChatBot from "react-chatbotify";
import { useSettings } from "../i18n/SettingsContext.jsx";
import {
  chatText,
  getAnswer,
  getMenuAnswer,
  menuLabels,
} from "../i18n/chat.js";

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

// ============================================================
// GEMINI (via Netlify function) WITH LOCAL FALLBACK
// ============================================================

async function getReply(input, content, lang) {
  const question = input.trim();

  // Menu buttons: instant local answers, no API call.
  const menuAnswer = getMenuAnswer(question, content, lang);
  if (menuAnswer) return menuAnswer;

  // Free-typed questions: ask Gemini, fall back to local answers on any failure.
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: question, lang }),
      signal: controller.signal,
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const data = await response.json();
    if (!data.reply) throw new Error("Empty reply");

    return data.reply;
  } catch {
    return getAnswer(question, content, lang);
  } finally {
    clearTimeout(timer);
  }
}

// ============================================================
// CHATBOT STYLES (dark = original look, light = new)
// ============================================================

const PALETTES = {
  dark: {
    shadow: "0 18px 45px rgba(0, 0, 0, 0.45)",
    header: "linear-gradient(135deg, #0b1f14, #123d25)",
    headerText: "#ffffff",
    body: "#07130d",
    botBg: "#10251a",
    botText: "#f4fff7",
    botBorder: "1px solid rgba(46, 204, 113, 0.15)",
    optionText: "#2ecc71",
    optionBorder: "1px solid rgba(46, 204, 113, 0.5)",
    inputBar: "#0b1f14",
    inputBarBorder: "1px solid rgba(255,255,255,0.08)",
    inputBg: "#10251a",
    inputText: "#ffffff",
    inputBorder: "1px solid rgba(255,255,255,0.12)",
    refreshBg: "#0b1f14",
  },
  light: {
    shadow: "0 18px 45px rgba(0, 0, 0, 0.22)",
    header: "linear-gradient(135deg, #0b1f14, #123d25)",
    headerText: "#ffffff",
    body: "#f3f8f4",
    botBg: "#e3f1e8",
    botText: "#0b1f14",
    botBorder: "1px solid rgba(26, 143, 76, 0.25)",
    optionText: "#157a40",
    optionBorder: "1px solid rgba(21, 122, 64, 0.55)",
    inputBar: "#ffffff",
    inputBarBorder: "1px solid rgba(0,0,0,0.08)",
    inputBg: "#f1f5f2",
    inputText: "#111111",
    inputBorder: "1px solid rgba(0,0,0,0.15)",
    refreshBg: "#ffffff",
  },
};

function buildStyles(theme) {
  const p = PALETTES[theme];
  return {
    chatWindowStyle: {
      width: "360px",
      height: "620px",
      borderRadius: "16px",
      overflow: "hidden",
      boxShadow: p.shadow,
    },
    headerStyle: { background: p.header, color: p.headerText },
    bodyStyle: { background: p.body },
    botBubbleStyle: {
      background: p.botBg,
      color: p.botText,
      border: p.botBorder,
      borderRadius: "14px",
    },
    userBubbleStyle: {
      background: "#2ecc71",
      color: "#06210f",
      borderRadius: "14px",
    },
    botOptionStyle: {
      background: "transparent",
      color: p.optionText,
      border: p.optionBorder,
      borderRadius: "20px",
    },
    botOptionHoveredStyle: { background: "#2ecc71", color: "#06210f" },
    chatInputContainerStyle: {
      background: p.inputBar,
      borderTop: p.inputBarBorder,
    },
    chatInputAreaStyle: {
      background: p.inputBg,
      color: p.inputText,
      border: p.inputBorder,
      borderRadius: "12px",
    },
    sendButtonStyle: { background: "#2ecc71", color: "#06210f" },
    chatButtonStyle: {
      background: "#2ecc71",
      color: "#06210f",
      boxShadow: "0 8px 24px rgba(46, 204, 113, 0.35)",
    },
    chatButtonHoveredStyle: { background: "#35d47a" },
  };
}

// ============================================================
// COMPONENT
// ============================================================

export default function Chatbot() {
  const { lang, theme, content } = useSettings();
  const T = chatText[lang];

  const [chatKey, setChatKey] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [reopen, setReopen] = useState(false);
  const [ready, setReady] = useState(false);

  // The flow reads the current language/content through a ref, so the
  // conversation keeps working even if a callback is held on to.
  const live = useRef({ lang, content });
  live.current = { lang, content };

  // React StrictMode (dev only) mounts components twice, which starts the
  // chat flow twice and doubles the buttons. Mounting the chat one tick
  // later means only the second, real mount ever renders it.
  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 0);
    return () => clearTimeout(timer);
  }, []);

  // Track whether the chat window is open, so the ↻ button
  // disappears together with the window.
  useEffect(() => {
    const onToggle = (event) => {
      const data = event?.data ?? event?.detail ?? {};
      if (typeof data.newState === "boolean") {
        setIsOpen(data.newState);
      } else if (typeof data.currentState === "boolean") {
        setIsOpen(!data.currentState);
      } else {
        // Unknown payload shape: fall back to toggling
        setIsOpen((prev) => !prev);
      }
    };

    window.addEventListener("rcb-toggle-chat-window", onToggle);
    return () => window.removeEventListener("rcb-toggle-chat-window", onToggle);
  }, []);

  function clearHistory() {
    Object.keys(sessionStorage)
      .filter((key) => key.startsWith("rcb"))
      .forEach((key) => sessionStorage.removeItem(key));
  }

  // Switching language restarts the conversation in the new language
  // (old messages would otherwise stay in the previous language) and keeps
  // the window open if it was open.
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    clearHistory();
    setReopen(isOpen);
    setChatKey((previous) => previous + 1);
  }, [lang]); // eslint-disable-line react-hooks/exhaustive-deps

  function startNewChat() {
    clearHistory();
    setReopen(false);
    setChatKey((previous) => previous + 1);
    setIsOpen(false); // remounted chat starts closed; reopen via launcher
  }

  // Flow, settings and styles. Flow/settings change with the language only;
  // the remount above makes sure they are re-read.
  const flow = useMemo(() => {
    const menu = menuLabels(lang);
    return {
      start: { message: T.greeting, options: menu, path: "answer" },
      answer: {
        message: async (params) =>
          getReply(params.userInput, live.current.content, live.current.lang),
        // Without this, the bot waits for another user message before moving
        // on, so the buttons never appear and your next message gets swallowed.
        transition: { duration: 0 },
        path: "continue",
      },
      // Short follow-up + same buttons after every answer (no repeated greeting).
      continue: { message: T.followUp, options: menu, path: "answer" },
    };
  }, [lang, T]);

  const settings = useMemo(
    () => ({
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
      tooltip: { mode: "NEVER" },
      header: {
        title: T.headerTitle,
        subtitle: T.headerSubtitle,
        avatar: ROBOT,
      },
      // Robot next to every bot message
      botBubble: { showAvatar: true, avatar: ROBOT },
      // Robot on the floating launcher button (optional)
      chatButton: { icon: ROBOT },
      chatInput: { enabledPlaceholderText: T.placeholder },
      chatWindow: { defaultOpen: reopen },
      // Keep the conversation when the page refreshes
      chatHistory: { storageType: "SESSION_STORAGE" },
    }),
    [T, reopen],
  );

  const styles = useMemo(() => buildStyles(theme), [theme]);
  const palette = PALETTES[theme];

  return (
    <div style={{ position: "relative" }}>
      {ready && (
        <ChatBot
          key={chatKey}
          id="shyam-portfolio-assistant"
          flow={flow}
          settings={settings}
          styles={styles}
        />
      )}

      {isOpen && (
        <button
          type="button"
          onClick={startNewChat}
          title={T.newChat}
          aria-label={T.newChat}
          style={{
            position: "fixed",
            right: "24px",
            bottom: "92px",
            zIndex: 9999,
            width: "38px",
            height: "38px",
            borderRadius: "50%",
            border: "1px solid rgba(46, 204, 113, 0.45)",
            background: palette.refreshBg,
            color: theme === "dark" ? "#2ecc71" : "#157a40",
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

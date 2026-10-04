// Chatbot text + intent matching for every supported language.
// Pure JS (no JSX).
//
// One ordered list of INTENTS is shared by all languages: each intent has
// keywords per language and a single answer builder that pulls its wording
// from the language pack below. Keyword order matters (first match wins).

export const RESEARCHGATE = "https://www.researchgate.net/profile/Shyam-Bhetuwal";

// ---------------------------------------------------------------------------
// Language packs
// ---------------------------------------------------------------------------

export const chatText = {
  en: {
    greeting:
      "Hi! 👋 I'm Shyam's portfolio assistant. I can tell you about his skills, experience, education, projects, research, publications, and contact information. What would you like to know?",
    followUp: "What else would you like to know?",
    headerTitle: "Shyam's AI Assistant",
    headerSubtitle: "Portfolio • Research • Projects",
    placeholder: "Ask about Shyam...",
    newChat: "Start a new chat",
    // key -> button label. Keys map straight to intents.
    menu: {
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      research: "Research",
      publications: "Publications",
      contact: "Contact",
    },
    hiring: (n, c) =>
      "Shyam is a strong fit for AI and software engineering roles:\n\n" +
      "• AI and machine learning, computer vision and multimodal systems\n" +
      "• Full-stack software development\n" +
      `• ${n} publications and hands-on R&D experience\n\n` +
      "To discuss a role, contact him:\n" +
      `• Email: ${c.email}\n` +
      `• LinkedIn: ${c.linkedin}`,
    skillsIntro: "Shyam's technical background includes:",
    experienceIntro: "Shyam's professional experience includes:",
    thesis:
      "Shyam's Master's thesis at the University of Turku was:\n\n" +
      '"Comparing the Accuracy and Efficiency of Existing AI Based Food Detection Tools"\n\n' +
      "The work focused on AI-based food detection and the development of an automated AIoT-based platform.",
    educationIntro: "Shyam's academic background:",
    flavoriaExtra:
      "This work is associated with Shyam's research and publications on AI-powered food detection, analysis, and real-world validation.",
    mentalExtra:
      "Some implementation details cannot be disclosed because this is an ongoing research and potentially patented project.",
    countryExtra:
      "Technologies include React, OpenAI, Gemini, React Hooks, CSS, APIs, and interactive maps.",
    projectsIntro: "Shyam's main projects include:",
    publicationsIntro: (n) =>
      `Shyam currently has ${n} publications listed in the portfolio:`,
    contactAnswer: (c) =>
      "You can contact Shyam through:\n\n" +
      `• Email: ${c.email}\n` +
      `• Phone: ${c.phone}\n` +
      `• LinkedIn: ${c.linkedin}\n` +
      `• GitHub: ${c.githubPrimary.url}\n\n` +
      "You can also use the Contact section of the portfolio.",
    fit: (n) =>
      "Here is the relevant background:\n\n" +
      "• AI and machine learning\n" +
      "• Full-stack software development\n" +
      "• Computer vision and machine vision\n" +
      "• Multimodal and AIoT systems\n" +
      "• Research and applied AI\n" +
      `• ${n} publications listed in the portfolio\n` +
      "• Experience across university research, R&D, freelance development, and software projects\n\n" +
      "Explore the Experience, Projects, Skills, and Publications sections for more details.",
    fallback:
      "I can help with questions about:\n\n" +
      "• Skills & technologies\n" +
      "• Experience\n" +
      "• Education & Master's thesis\n" +
      "• AI/ML projects\n" +
      "• Flavoria Flex / AIoT research\n" +
      "• Publications\n" +
      "• Contact information\n\n" +
      'Try asking: "Tell me about the Flavoria project."',
  },

  fi: {
    greeting:
      "Hei! 👋 Olen Shyamin portfolioavustaja. Voin kertoa hänen taidoistaan, työkokemuksestaan, koulutuksestaan, projekteistaan, tutkimuksestaan, julkaisuistaan ja yhteystiedoistaan. Mitä haluaisit tietää?",
    followUp: "Mitä muuta haluaisit tietää?",
    headerTitle: "Shyamin tekoälyavustaja",
    headerSubtitle: "Portfolio • Tutkimus • Projektit",
    placeholder: "Kysy Shyamista...",
    newChat: "Aloita uusi keskustelu",
    menu: {
      skills: "Taidot",
      experience: "Kokemus",
      projects: "Projektit",
      research: "Tutkimus",
      publications: "Julkaisut",
      contact: "Yhteystiedot",
    },
    hiring: (n, c) =>
      "Shyam sopii hyvin tekoäly- ja ohjelmistoinsinöörin tehtäviin:\n\n" +
      "• Tekoäly ja koneoppiminen, konenäkö ja multimodaaliset järjestelmät\n" +
      "• Full-stack-ohjelmistokehitys\n" +
      `• ${n} julkaisua ja käytännön T&K-kokemusta\n\n` +
      "Voit keskustella tehtävästä ottamalla yhteyttä:\n" +
      `• Sähköposti: ${c.email}\n` +
      `• LinkedIn: ${c.linkedin}`,
    skillsIntro: "Shyamin tekninen osaaminen:",
    experienceIntro: "Shyamin työkokemus:",
    thesis:
      "Shyamin maisterin opinnäytetyö Turun yliopistossa oli:\n\n" +
      '"Comparing the Accuracy and Efficiency of Existing AI Based Food Detection Tools"\n\n' +
      "Työ keskittyi tekoälypohjaiseen ruoantunnistukseen ja automatisoidun AIoT-pohjaisen alustan kehittämiseen.",
    educationIntro: "Shyamin koulutustausta:",
    flavoriaExtra:
      "Tämä työ liittyy Shyamin tutkimukseen ja julkaisuihin tekoälypohjaisesta ruoantunnistuksesta, analyysista ja todellisen käyttöympäristön validoinnista.",
    mentalExtra:
      "Joitakin toteutuksen yksityiskohtia ei voi paljastaa, koska kyseessä on käynnissä oleva tutkimus- ja mahdollisesti patentoitava projekti.",
    countryExtra:
      "Teknologioita ovat React, OpenAI, Gemini, React Hooks, CSS, rajapinnat (API) ja interaktiiviset kartat.",
    projectsIntro: "Shyamin keskeisiä projekteja:",
    publicationsIntro: (n) =>
      `Shyamilla on portfoliossa tällä hetkellä ${n} julkaisua:`,
    contactAnswer: (c) =>
      "Shyamiin saa yhteyden näin:\n\n" +
      `• Sähköposti: ${c.email}\n` +
      `• Puhelin: ${c.phone}\n` +
      `• LinkedIn: ${c.linkedin}\n` +
      `• GitHub: ${c.githubPrimary.url}\n\n` +
      "Voit käyttää myös portfolion Yhteystiedot-osiota.",
    fit: (n) =>
      "Tässä olennainen tausta:\n\n" +
      "• Tekoäly ja koneoppiminen\n" +
      "• Full-stack-ohjelmistokehitys\n" +
      "• Konenäkö\n" +
      "• Multimodaaliset ja AIoT-järjestelmät\n" +
      "• Tutkimus ja soveltava tekoäly\n" +
      `• ${n} julkaisua portfoliossa\n` +
      "• Kokemusta yliopistotutkimuksesta, T&K-työstä, freelance-kehityksestä ja ohjelmistoprojekteista\n\n" +
      "Tutustu Kokemus-, Projektit-, Taidot- ja Julkaisut-osioihin saadaksesi lisätietoja.",
    fallback:
      "Voin auttaa kysymyksissä, jotka koskevat:\n\n" +
      "• Taitoja ja teknologioita\n" +
      "• Työkokemusta\n" +
      "• Koulutusta ja maisterin opinnäytetyötä\n" +
      "• Tekoäly- ja koneoppimisprojekteja\n" +
      "• Flavoria Flex -/AIoT-tutkimusta\n" +
      "• Julkaisuja\n" +
      "• Yhteystietoja\n\n" +
      'Kokeile kysyä: "Kerro Flavoria-projektista."',
  },
};

// ---------------------------------------------------------------------------
// Keywords. English words must match as whole words (so "hi" never matches
// "which"). Finnish words are inflected, so they match as word PREFIXES
// ("projekti" also matches "projekteista" -> use the stem).
// ---------------------------------------------------------------------------

const KEYWORDS = {
  hiring: {
    en: ["hire", "hiring", "recruit", "recruiting", "recruiter", "vacancy", "job offer"],
    fi: ["palkat", "palkkaa", "palkkaisi", "rekry", "työtarjo", "työpaikka", "avoin paikka"],
  },
  skills: {
    en: [
      "skill", "skills", "technology", "technologies", "tech stack", "stack",
      "programming", "programming language", "framework", "frameworks", "technical",
    ],
    fi: [
      "taito", "taidot", "osaami", "teknologi", "tekninen", "teknisi", "tech stack",
      "stack", "ohjelmointi", "kehys", "työkalu",
    ],
  },
  experience: {
    en: [
      "experience", "work experience", "career", "employment", "worked",
      "work history", "professional experience", "job", "jobs", "roles",
    ],
    fi: [
      "kokemu", "työkokemu", "ura", "työhistori", "työskent", "työ", "työt",
      "tehtävä", "tehtävät", "roolit",
    ],
  },
  thesis: {
    en: ["master thesis", "master's thesis", "masters thesis", "thesis topic", "thesis title"],
    fi: ["opinnäyte", "gradu", "diplomityö", "väitös"],
  },
  education: {
    en: [
      "education", "degree", "degrees", "university", "universities", "master",
      "master's", "masters", "bachelor", "bachelor's", "thesis", "study", "studied",
    ],
    fi: [
      "koulutu", "tutkinto", "tutkinn", "yliopisto", "maisteri", "kandi",
      "kandidaatti", "bachelor", "opiske", "opinnot", "amk", "ammattikorkeakoulu",
      "korkeakoulu",
    ],
  },
  flavoria: {
    en: [
      "flavoria", "flavoria flex", "calorie", "food detection", "food recognition",
      "food ai", "aiot", "machine vision", "machine vision system", "nutrition",
      "nutrient", "hospital", "restaurant",
    ],
    fi: [
      "flavoria", "kalori", "ruoantunnistu", "ruoan tunnistu", "ruokatunnistu",
      "aiot", "konenä", "ravinto", "ravintoaine", "sairaala", "ravintola",
    ],
  },
  mental: {
    en: [
      "mental health", "mental-health", "healthcare ai", "health ai", "health care",
      "patient ai", "nlp", "voice sensor", "heart rate",
    ],
    fi: [
      "mielenterveys", "terveydenhuolto", "terveysalan", "terveys-ai", "potilas",
      "nlp", "syke", "äänianturi",
    ],
  },
  country: {
    en: [
      "country finder", "country app", "country application", "country chatbot",
      "country ai", "countries",
    ],
    fi: ["country", "maatieto", "maasovellus", "maiden tiedot", "maista"],
  },
  ecommerce: {
    en: ["ecommerce", "e-commerce", "online shop", "shop", "shopping", "tshirt", "t-shirt"],
    fi: ["verkkokauppa", "verkkokaupa", "kauppa", "ostos", "t-paita", "tpaita", "ecommerce", "e-commerce"],
  },
  repository: {
    en: ["digital repository", "national repository", "repository", "thesis repository"],
    fi: ["arkisto", "digitaalinen arkisto", "julkaisuarkisto", "repository"],
  },
  library: {
    en: ["library management", "library system", "library application", "c# project", ".net project"],
    fi: ["kirjasto", "kirjastonhallinta", "c#-projekti", ".net-projekti"],
  },
  projects: {
    en: ["project", "projects", "built", "developed", "applications", "apps", "portfolio projects"],
    fi: ["projekt", "sovellu", "rakensi", "rakentanut", "kehitti", "kehittänyt"],
  },
  publications: {
    en: [
      "publication", "publications", "paper", "papers", "research paper",
      "research papers", "published", "research", "researchgate", "conference",
    ],
    fi: [
      "julkaisu", "artikkeli", "tutkimus", "tutkimuspaperi", "paperi", "konferenssi",
      "researchgate", "tieteellinen",
    ],
  },
  contact: {
    en: [
      "contact", "contact information", "email", "e-mail", "reach", "reach him",
      "get in touch", "hire", "hiring", "linkedin", "github", "cv", "resume",
    ],
    fi: [
      "yhteystie", "yhteys", "yhteyt", "ottaa yhteyttä", "ota yhteyttä", "sähköposti", "sähköpost", "email",
      "puhelin", "puhelinnumero", "linkedin", "github", "cv", "ansioluettelo", "resume",
    ],
  },
  fit: {
    en: ["suitable", "fit for", "good fit", "qualified", "right for", "suited", "background"],
    fi: ["sopiva", "sopisi", "sopii", "pätevä", "soveltuu", "tausta", "kelpo"],
  },
  greeting: {
    en: ["hello", "hi", "hey", "good morning", "good evening"],
    fi: ["hei", "moi", "moikka", "terve", "hyvää huomenta", "hyvää iltaa", "päivää", "hello", "hi"],
  },
};

function escapeRegex(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// English: whole word. Finnish: word prefix (handles case endings).
function contains(input, words, lang) {
  const tail = lang === "fi" ? "" : "(?![\\p{L}\\p{N}])";
  return words.some((word) =>
    new RegExp(`(?<![\\p{L}\\p{N}])${escapeRegex(word)}${tail}`, "iu").test(input)
  );
}

// ---------------------------------------------------------------------------
// Answers
// ---------------------------------------------------------------------------

function projectAnswer(content, id, extra) {
  const project = content.projects.find((p) => p.id === id);
  return `${project.title}\n\n${project.text}` + (extra ? `\n\n${extra}` : "");
}

// Same order as the original English bot.
const INTENTS = [
  ["hiring", (c, T) => T.hiring(c.publications.length, c.contact)],
  [
    "skills",
    (c, T) => T.skillsIntro + "\n\n" + c.skills.map((s) => `• ${s.label}: ${s.text}`).join("\n"),
  ],
  [
    "experience",
    (c, T) =>
      T.experienceIntro + "\n\n" + c.experience.map((i) => `• ${i.period} — ${i.text}`).join("\n"),
  ],
  ["thesis", (c, T) => T.thesis],
  [
    "education",
    (c, T) =>
      T.educationIntro + "\n\n" + c.education.map((i) => `• ${i.period}\n  ${i.text}`).join("\n\n"),
  ],
  ["flavoria", (c, T) => projectAnswer(c, "calorie-tracking", T.flavoriaExtra)],
  ["mental", (c, T) => projectAnswer(c, "mental-health", T.mentalExtra)],
  ["country", (c, T) => projectAnswer(c, "country-finder", T.countryExtra)],
  ["ecommerce", (c) => projectAnswer(c, "ecommerce")],
  ["repository", (c) => projectAnswer(c, "digital-repo")],
  ["library", (c) => projectAnswer(c, "library-system")],
  [
    "projects",
    (c, T) => T.projectsIntro + "\n\n" + c.projects.map((p) => `• ${p.title} — ${p.text}`).join("\n\n"),
  ],
  [
    "publications",
    (c, T) =>
      T.publicationsIntro(c.publications.length) +
      "\n\n" +
      c.publications.map((p) => `• ${p.title}\n${p.type}\n${p.text}`).join("\n\n") +
      `\n\nResearchGate: ${RESEARCHGATE}`,
  ],
  ["contact", (c, T) => T.contactAnswer(c.contact)],
  ["fit", (c, T) => T.fit(c.publications.length)],
  ["greeting", (c, T) => T.greeting],
];

// Menu button keys -> intent id
const MENU_INTENT = {
  skills: "skills",
  experience: "experience",
  projects: "projects",
  research: "publications",
  publications: "publications",
  contact: "contact",
};

export function menuLabels(lang) {
  return Object.values(chatText[lang].menu);
}

function answerFor(intentId, content, lang) {
  const entry = INTENTS.find(([id]) => id === intentId);
  return entry[1](content, chatText[lang]);
}

// Local (offline) answer for a free-typed question.
export function getAnswer(question, content, lang) {
  const input = question.toLowerCase().trim();
  const T = chatText[lang];

  for (const [id, build] of INTENTS) {
    if (contains(input, KEYWORDS[id][lang], lang)) return build(content, T);
  }
  return T.fallback;
}

// Menu-button click -> instant local answer (or null if it is not a menu label).
export function getMenuAnswer(question, content, lang) {
  const key = Object.entries(chatText[lang].menu).find(
    ([, label]) => label.toLowerCase() === question.trim().toLowerCase()
  )?.[0];
  return key ? answerFor(MENU_INTENT[key], content, lang) : null;
}

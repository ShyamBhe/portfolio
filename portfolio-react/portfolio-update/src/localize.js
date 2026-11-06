import * as en from "./data.js";
import { fi } from "./data.fi.js";

// Pure JS (no React), so the Netlify function can import it too.
export function getData(lang = "en") {
  const shared = {
    contact: en.contact,
    researchGateProfile: en.researchGateProfile,
  };

  if (lang !== "fi") {
    return {
      ...shared,
      nav: en.nav,
      skills: en.skills,
      experience: en.experience,
      education: en.education,
      projects: en.projects,
      publications: en.publications,
    };
  }

  return {
    ...shared,
    nav: en.nav.map((n) => ({ ...n, label: fi.nav[n.href] ?? n.label })),
    skills: fi.skills,
    experience: fi.experience,
    education: fi.education,
    projects: en.projects.map((p) => {
      const tr = fi.projects[p.id] ?? {};
      return {
        ...p,
        title: tr.title ?? p.title,
        text: tr.text ?? p.text,
        action: {
          ...p.action,
          label: tr.actionLabel ?? p.action.label,
          ...(tr.alertText ? { alertText: tr.alertText } : {}),
        },
      };
    }),
    publications: en.publications.map((p) => ({ ...p, ...(fi.publications[p.id] ?? {}) })),
  };
}

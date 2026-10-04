# Shyam Portfolio — React


## Setup

```bash
npm install
npm run dev        # local dev server
npm run build       # production build -> dist/
```

## Language & theme

- English / Finnish and dark / light are switched from the navbar (also on mobile).
- Choices are saved in `localStorage` (`portfolio-lang`, `portfolio-theme`). Default language follows the browser (Finnish if it starts with `fi`), default theme is dark.
- UI text: `src/i18n/ui.js`. Portfolio content: English in `src/data.js`, Finnish overrides in `src/i18n/content.js`. Chatbot wording/keywords: `src/i18n/chat.js`.
- To add content (e.g. a new project) add it to `data.js`, then optionally add its Finnish text to `content.js` (it falls back to English if missing).

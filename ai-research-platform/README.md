# AI Research Platform

A small, practical publishing platform for AI news, research notes, paper summaries, and original ideas.

## Stack
- Frontend: React + Vite
- Backend: FastAPI + SQLModel
- Local database: SQLite
- Production-ready direction: PostgreSQL

## Features
- Public article listing and article pages
- Categories and tags
- Search
- Admin login
- Create/edit/delete articles
- Draft/published status
- Rich Markdown-style article content
- References/external links
- Responsive UI

## Run locally

### Backend
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python create_admin.py admin@example.com change-this-password
uvicorn app.main:app --reload
```

### Frontend
In a second terminal:
```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:5173

Admin: http://localhost:5173/login

For production, replace the default secret and SQLite configuration with environment variables and PostgreSQL.

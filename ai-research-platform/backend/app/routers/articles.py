from datetime import datetime, timezone
from typing import Optional
from fastapi import APIRouter, Depends, HTTPException, Header
from sqlmodel import Session, select
from ..database import get_session
from ..models import Article
from ..schemas import ArticleCreate, ArticleUpdate
from ..auth import verify_token

router = APIRouter(prefix="/api/articles", tags=["articles"])

def admin_required(authorization: Optional[str] = Header(default=None)):
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Authentication required")
    subject = verify_token(authorization.split(" ", 1)[1])
    if not subject:
        raise HTTPException(status_code=401, detail="Invalid or expired token")
    return subject

def make_slug(title: str):
    import re
    slug = re.sub(r"[^a-z0-9]+", "-", title.lower()).strip("-")
    return slug or "article"

@router.get("")
def list_articles(
    search: str = "",
    category: str = "",
    include_drafts: bool = False,
    session: Session = Depends(get_session)
):
    statement = select(Article).order_by(Article.updated_at.desc())
    if not include_drafts:
        statement = statement.where(Article.published == True)
    articles = session.exec(statement).all()
    if search:
        q = search.lower()
        articles = [a for a in articles if q in a.title.lower() or q in a.excerpt.lower() or q in a.tags.lower()]
    if category:
        articles = [a for a in articles if a.category.lower() == category.lower()]
    return articles

@router.get("/slug/{slug}")
def get_by_slug(slug: str, session: Session = Depends(get_session)):
    article = session.exec(select(Article).where(Article.slug == slug)).first()
    if not article or not article.published:
        raise HTTPException(status_code=404, detail="Article not found")
    return article

# MUST BE BEFORE /{article_id}
@router.get("/admin/all")
def admin_all(_: str = Depends(admin_required), session: Session = Depends(get_session)):
    return session.exec(select(Article).order_by(Article.updated_at.desc())).all()

@router.get("/{article_id}")
def get_article(article_id: int, _: str = Depends(admin_required), session: Session = Depends(get_session)):
    article = session.get(Article, article_id)
    if not article:
        raise HTTPException(status_code=404, detail="Article not found")
    return article

@router.post("")
def create_article(data: ArticleCreate, _: str = Depends(admin_required), session: Session = Depends(get_session)):
    slug = data.slug.strip() or make_slug(data.title)
    if session.exec(select(Article).where(Article.slug == slug)).first():
        slug = f"{slug}-{int(datetime.now().timestamp())}"
    article = Article(**data.model_dump(), slug=slug)
    if article.published:
        article.published_at = datetime.now(timezone.utc)
    session.add(article)
    session.commit()
    session.refresh(article)
    return article

@router.put("/{article_id}")
def update_article(article_id: int, data: ArticleUpdate, _: str = Depends(admin_required), session: Session = Depends(get_session)):
    article = session.get(Article, article_id)
    if not article:
        raise HTTPException(status_code=404, detail="Article not found")
    was_published = article.published
    for key, value in data.model_dump().items():
        setattr(article, key, value)
    article.updated_at = datetime.now(timezone.utc)
    if article.published and not was_published:
        article.published_at = datetime.now(timezone.utc)
    if not article.published:
        article.published_at = None
    session.add(article)
    session.commit()
    session.refresh(article)
    return article

@router.delete("/{article_id}")
def delete_article(article_id: int, _: str = Depends(admin_required), session: Session = Depends(get_session)):
    article = session.get(Article, article_id)
    if not article:
        raise HTTPException(status_code=404, detail="Article not found")
    session.delete(article)
    session.commit()
    return {"ok": True}
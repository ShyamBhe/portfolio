from datetime import datetime, timezone
from typing import Optional
from sqlmodel import SQLModel, Field

class Article(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    title: str
    slug: str = Field(index=True)
    excerpt: str = ""
    content: str = ""
    category: str = "AI Research"
    tags: str = ""
    cover_image: str = ""
    references: str = ""
    published: bool = False
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    updated_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    published_at: Optional[datetime] = None

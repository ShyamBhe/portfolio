from typing import Optional
from pydantic import BaseModel, Field

class LoginRequest(BaseModel):
    email: str
    password: str

class ArticleCreate(BaseModel):
    title: str = Field(min_length=1)
    slug: str = ""
    excerpt: str = ""
    content: str = ""
    category: str = "AI Research"
    tags: str = ""
    cover_image: str = ""
    references: str = ""
    published: bool = False

class ArticleUpdate(ArticleCreate):
    pass

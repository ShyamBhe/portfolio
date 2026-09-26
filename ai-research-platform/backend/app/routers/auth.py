from fastapi import APIRouter, HTTPException
from ..schemas import LoginRequest
from ..auth import ADMIN_EMAIL, ADMIN_PASSWORD_HASH, verify_password, create_token

router = APIRouter(prefix="/api/auth", tags=["auth"])

@router.post("/login")
def login(data: LoginRequest):
    if data.email.lower() != ADMIN_EMAIL.lower() or not ADMIN_PASSWORD_HASH:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    if not verify_password(data.password, ADMIN_PASSWORD_HASH):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return {"access_token": create_token(data.email.lower()), "token_type": "bearer"}

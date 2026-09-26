import os, sys
from app.auth import hash_password

if len(sys.argv) != 3:
    print("Usage: python create_admin.py EMAIL PASSWORD")
    raise SystemExit(1)

email, password = sys.argv[1], sys.argv[2]
print("\nAdd these values to backend/.env:\n")
print(f"ADMIN_EMAIL={email}")
print(f"ADMIN_PASSWORD_HASH={hash_password(password)}")
print("SECRET_KEY=replace-with-a-long-random-secret\n")

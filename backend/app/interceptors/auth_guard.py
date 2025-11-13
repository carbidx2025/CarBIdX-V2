
from fastapi import Request, HTTPException
from app.utils.jwt_utils import jwt, settings

async def auth_guard(request: Request):
    token = request.headers.get("Authorization")
    if not token:
        raise HTTPException(status_code=401)
    try:
        jwt.decode(token.replace("Bearer ", ""), settings.JWT_SECRET_KEY, algorithms=["HS256"])
    except:
        raise HTTPException(status_code=401)

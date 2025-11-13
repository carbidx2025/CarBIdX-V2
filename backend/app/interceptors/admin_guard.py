
from fastapi import Request, HTTPException
from app.config.settings import settings

async def admin_guard(request: Request):
    email = request.headers.get("X-Admin-Email")
    if email != settings.ADMIN_EMAIL:
        raise HTTPException(status_code=403)

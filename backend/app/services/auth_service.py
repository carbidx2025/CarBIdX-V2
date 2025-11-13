
from app.utils.hash_utils import verify_password
from app.utils.jwt_utils import create_token
from app.models.user import User

async def authenticate(user: User, password: str):
    if not verify_password(password, user.hashed_password):
        return None
    return create_token({"sub": user.email})

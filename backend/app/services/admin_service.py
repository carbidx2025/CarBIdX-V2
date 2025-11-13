
from app.models.admin import Admin
from app.database.session import AsyncSessionLocal

async def get_admin_by_email(email: str):
    async with AsyncSessionLocal() as session:
        q = await session.execute(
            Admin.__table__.select().where(Admin.email == email)
        )
        return q.fetchone()


from app.models.request import BuyerRequest
from app.database.session import AsyncSessionLocal

async def create_request(data):
    async with AsyncSessionLocal() as session:
        req = BuyerRequest(**data)
        session.add(req)
        await session.commit()
        await session.refresh(req)
        return req


from app.models.auction import Auction
from app.database.session import AsyncSessionLocal

async def create_auction(request_id: int):
    async with AsyncSessionLocal() as session:
        auc = Auction(request_id=request_id)
        session.add(auc)
        await session.commit()
        await session.refresh(auc)
        return auc


from app.models.bid import Bid
from app.database.session import AsyncSessionLocal
from sqlalchemy import select, func

async def place_bid(auction_id: int, dealer_id: int, amount: int):
    async with AsyncSessionLocal() as session:
        bid = Bid(auction_id=auction_id, dealer_id=dealer_id, amount=amount)
        session.add(bid)
        await session.commit()
        await session.refresh(bid)
        return bid

async def get_lowest_bid(auction_id: int):
    async with AsyncSessionLocal() as session:
        q = await session.execute(
            select(func.min(Bid.amount)).where(Bid.auction_id == auction_id)
        )
        return q.scalar()

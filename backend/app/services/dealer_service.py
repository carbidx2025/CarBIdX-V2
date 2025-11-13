
from app.models.dealer import Dealer
from app.database.session import AsyncSessionLocal

async def register_dealer(data):
    async with AsyncSessionLocal() as session:
        dealer = Dealer(**data)
        session.add(dealer)
        await session.commit()
        await session.refresh(dealer)
        return dealer


from sqlalchemy import Column, Integer, ForeignKey
from app.database.base import Base

class Bid(Base):
    __tablename__ = "bids"
    id = Column(Integer, primary_key=True)
    auction_id = Column(Integer, ForeignKey("auctions.id"))
    dealer_id = Column(Integer, ForeignKey("dealers.id"))
    amount = Column(Integer)

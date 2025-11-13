
from sqlalchemy import Column, Integer, ForeignKey
from app.database.base import Base

class Auction(Base):
    __tablename__ = "auctions"
    id = Column(Integer, primary_key=True)
    request_id = Column(Integer, ForeignKey("buyer_requests.id"))

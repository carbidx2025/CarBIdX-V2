
from sqlalchemy import Column, Integer, String
from app.database.base import Base

class Deposit(Base):
    __tablename__ = "deposits"
    id = Column(Integer, primary_key=True)
    buyer_request_id = Column(Integer)
    stripe_intent_id = Column(String)
    status = Column(String)


from sqlalchemy import Column, Integer, String
from app.database.base import Base

class BuyerRequest(Base):
    __tablename__ = "buyer_requests"
    id = Column(Integer, primary_key=True)
    year = Column(Integer)
    make = Column(String)
    model = Column(String)
    trim = Column(String)
    zip_code = Column(String)

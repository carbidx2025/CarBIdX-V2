
from sqlalchemy import Column, Integer, String
from app.database.base import Base

class Payment(Base):
    __tablename__ = "payments"
    id = Column(Integer, primary_key=True)
    deposit_id = Column(Integer)
    stripe_charge_id = Column(String)

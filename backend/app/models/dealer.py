
from sqlalchemy import Column, Integer, String
from app.database.base import Base

class Dealer(Base):
    __tablename__ = "dealers"
    id = Column(Integer, primary_key=True)
    dealership_name = Column(String)
    email = Column(String, unique=True)
    license_number = Column(String)

from pydantic import BaseModel
class BidBase(BaseModel): auction_id: int; dealer_id: int; amount: int

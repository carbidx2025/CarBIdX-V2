from pydantic import BaseModel
class DepositBase(BaseModel): buyer_request_id: int; stripe_intent_id: str; status: str

from pydantic import BaseModel
class PaymentBase(BaseModel): deposit_id: int; stripe_charge_id: str

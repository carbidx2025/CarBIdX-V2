
from app.config.stripe_config import capture_payment, cancel_payment

async def capture(intent_id: str):
    return capture_payment(intent_id)

async def cancel(intent_id: str):
    return cancel_payment(intent_id)

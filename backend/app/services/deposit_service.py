
from app.config.stripe_config import create_payment_intent

async def create_deposit_hold(amount_cents: int, metadata: dict):
    return create_payment_intent(amount_cents, metadata)

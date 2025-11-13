
import stripe
from app.config.settings import settings

stripe.api_key = settings.STRIPE_SECRET_KEY

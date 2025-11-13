
from pydantic import BaseSettings

class Settings(BaseSettings):
    APP_NAME: str = "CarBidX-V2"
    DATABASE_URL: str
    JWT_SECRET_KEY: str
    STRIPE_SECRET_KEY: str
    STRIPE_WEBHOOK_SECRET: str
    ADMIN_EMAIL: str
    ADMIN_PASSWORD: str

    class Config:
        env_file = ".env"

settings = Settings()

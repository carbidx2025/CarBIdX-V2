from pydantic import BaseModel
class BuyerRequestBase(BaseModel): year: int; make: str; model: str; trim: str; zip_code: str

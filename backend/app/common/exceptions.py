
from fastapi import HTTPException

class NotFound(HTTPException):
    def __init__(self, detail="Not Found"):
        super().__init__(status_code=404, detail=detail)

class Unauthorized(HTTPException):
    def __init__(self, detail="Unauthorized"):
        super().__init__(status_code=401, detail=detail)

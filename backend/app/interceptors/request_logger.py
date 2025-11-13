
import time
from fastapi import Request

async def log_request(request: Request, call_next):
    start = time.time()
    response = await call_next(request)
    duration = time.time() - start
    print(f"{request.url.path} took {duration}")
    return response

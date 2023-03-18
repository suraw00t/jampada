from pydantic import BaseModel
from datetime import datetime


class CreateToken(BaseModel):
    token: str

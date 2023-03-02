from typing import List, Optional
from pydantic import BaseModel

# Input schemas
class ItemCreate(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    quantity: int


class ItemUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    price: Optional[float] = None
    quantity: Optional[int] = None


class UserCreate(BaseModel):
    username: str
    password: str


# Output schemas
class Item(BaseModel):
    id: str
    name: str
    description: Optional[str] = None
    price: float
    quantity: int


class Token(BaseModel):
    access_token: str
    token_type: str


class Message(BaseModel):
    message: str


class PaginatedItems(BaseModel):
    items: List[Item]
    total: int

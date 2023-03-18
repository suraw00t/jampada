from typing import List, Optional
from pydantic import BaseModel


class UserCreate(BaseModel):
    email: str
    username: str
    password: str
    first_name: str
    last_name: str
    phone: str


class UserLogin(BaseModel):
    username: str
    password: str


class User(BaseModel):
    id: str
    email: str
    username: str
    password: str
    first_name: str
    last_name: str
    phone: str


class ListUser(BaseModel):
    id: str
    username: str

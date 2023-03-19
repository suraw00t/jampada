from typing import List, Dict, Optional
from pydantic import BaseModel
from datetime import datetime
from . import User, ListUser


class TopicCreate(BaseModel):
    name: str
    date_time: datetime
    level: str
    place: str
    player: str
    type: str
    detail: Optional[str] = None


class TopicEdit(BaseModel):
    date_time: datetime
    level: str
    place: str
    player: str
    type: str
    detail: Optional[str] = None


class Topic(BaseModel):
    id: str
    name: str
    level: str
    player: str
    date_time: datetime
    place: str
    type: str
    member: Optional[List[ListUser]]
    detail: Optional[str] = None

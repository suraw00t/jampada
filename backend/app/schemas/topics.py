from typing import List, Dict, Optional
from pydantic import BaseModel


class TopicCreate(BaseModel):
    name: str
    level: str
    date_time: str
    place: str
    detail: Optional[str] = None


class Topic(BaseModel):
    id: str
    name: str
    level: str
    date_time: str
    place: str
    detail: Optional[str] = None

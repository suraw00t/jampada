from pydantic import BaseModel


class SportCreate(BaseModel):
    name: str
    detail: str


class Sport(BaseModel):
    id: str
    name: str
    detail: str

    class Config:
        orm_mode = True

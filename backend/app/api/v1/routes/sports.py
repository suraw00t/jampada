from fastapi import APIRouter
from typing import List

from app.schemas import Sport, SportCreate
import app.models as models

router = APIRouter()


@router.post("/create")
async def create_sport(topic: SportCreate):
    new_sport = models.Sport(**topic.dict())
    new_sport.save()
    return {"message": "Create sport sucessfull"}


@router.get("/all", response_model_by_alias=False)
async def get_all() -> str:
    sports = models.Sport.objects()

    return sports.to_json()


@router.get("/{sport_id}", response_model_by_alias=False)
async def get_sport(sport_id: str):
    sport = models.Sport.objects(id=sport_id).first()

    return sport.to_json()

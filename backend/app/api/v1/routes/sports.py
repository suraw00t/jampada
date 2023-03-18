from fastapi import APIRouter, HTTPException
from starlette.status import (
    HTTP_401_UNAUTHORIZED,
    HTTP_404_NOT_FOUND,
    HTTP_409_CONFLICT,
)
from mongoengine.errors import DoesNotExist
from typing import List

from app import models
from app.schemas import Sport, SportCreate

router = APIRouter()


@router.post("/create/", response_model=Sport)
async def create_sport(sport: SportCreate):
    new_sport = models.Sport(**sport.dict())
    new_sport.save()
    return Sport(id=str(new_sport.id), **new_sport.to_mongo().to_dict())


@router.get("/all", response_model=List[Sport])
async def get_all():
    sports = models.Sport.objects.all()
    return [Sport(id=str(sport.id), **sport.to_mongo().to_dict()) for sport in sports]


@router.get("/{sport_id}", response_model=Sport)
async def get_sport(sport_id: str):
    try:
        sport = models.Sport.objects.get(id=sport_id)
    except DoesNotExist as e:
        raise HTTPException(status_code=HTTP_404_NOT_FOUND, detail=str(e))

    return Sport(id=str(sport.id), **sport.to_mongo().to_dict())

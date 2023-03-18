from fastapi import APIRouter, Depends, HTTPException
from starlette.status import (
    HTTP_401_UNAUTHORIZED,
    HTTP_404_NOT_FOUND,
    HTTP_409_CONFLICT,
)
from mongoengine.errors import DoesNotExist

from app import models
from app.core import deps
from app.schemas import User, UserCreate

from loguru import logger

router = APIRouter()


@router.post("/create", response_model=User)
async def create_user(user: UserCreate):
    new_user = models.User(**user.dict())
    new_user.set_password(user.password)
    new_user.save()

    return User(id=str(new_user.id), **new_user.to_mongo())


@router.get("/{user_id}", response_model_by_alias=False, response_model=User)
async def get_user(user_id):
    try:
        user = models.User.objects.get(id=user_id)
    except DoesNotExist as e:
        raise HTTPException(status_code=HTTP_404_NOT_FOUND, detail=str(e))
    return User(id=str(user.id), **user.to_mongo())

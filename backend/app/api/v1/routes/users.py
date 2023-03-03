from fastapi import APIRouter, Depends, HTTPException, requests
from starlette.status import (
    HTTP_401_UNAUTHORIZED,
    HTTP_404_NOT_FOUND,
    HTTP_409_CONFLICT,
)

from app import models
from app.core import deps
from app.schemas import User, UserCreate

from loguru import logger

router = APIRouter()


@router.post("/create")
async def create_user(user: UserCreate):
    new_user = models.User(**user.dict())
    new_user.set_password(user.password)
    new_user.save()

    return {"message": "Create user successfull"}


@router.get("/{user_id}", response_model_by_alias=False)
async def get_user(user_id):
    user = models.User.objects(id=user_id).first()

    return user.to_json()

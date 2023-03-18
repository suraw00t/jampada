from fastapi import APIRouter, Depends, HTTPException, Response
from starlette.status import (
    HTTP_401_UNAUTHORIZED,
    HTTP_404_NOT_FOUND,
    HTTP_409_CONFLICT,
    HTTP_400_BAD_REQUEST,
    HTTP_422_UNPROCESSABLE_ENTITY,
)
from mongoengine.errors import DoesNotExist, NotUniqueError
from datetime import timedelta

from app import models
from app.core import deps, create_access_token, create_logs, create_refresh_token
from app.schemas import User, UserCreate, UserLogin
from loguru import logger

ACCESS_TOKEN_EXPIRE_MINUTES = 30

router = APIRouter()


@router.post("/create", response_model=User)
async def create_user(user: UserCreate):
    new_user = models.User(**user.dict())
    new_user.set_password(user.password)
    try:
        new_user.save()
    except NotUniqueError as e:
        raise HTTPException(
            status_code=HTTP_422_UNPROCESSABLE_ENTITY,
            detail="Please use other username",
        )

    return User(id=str(new_user.id), **new_user.to_mongo())


@router.get("/{user_id}", response_model_by_alias=False, response_model=User)
async def get_user(user_id):
    try:
        user = models.User.objects.get(id=user_id)
    except DoesNotExist as e:
        raise HTTPException(status_code=HTTP_404_NOT_FOUND, detail=str(e))
    return User(id=str(user.id), **user.to_mongo())


@router.post("/login")
async def login(user: UserLogin, response: Response):
    print("Hello")
    user_db = models.User.objects(username=user.username).first()
    if not user_db:
        raise HTTPException(
            status_code=HTTP_400_BAD_REQUEST, detail="Invalid username or password"
        )
    if not user_db.verify_password(user.password):
        raise HTTPException(
            status_code=HTTP_400_BAD_REQUEST, detail="Invalid username or password"
        )
    access_token = create_access_token(
        subject=user.username,
    )
    response.set_cookie(key="access_token", value=access_token, httponly=True)
    print(response.__dict__)
    return {"data": {"access_token": access_token}}

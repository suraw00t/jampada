from fastapi import APIRouter, Depends, HTTPException
from starlette.status import (
    HTTP_401_UNAUTHORIZED,
    HTTP_404_NOT_FOUND,
    HTTP_409_CONFLICT,
)

from app import models
from app.core import deps

from loguru import logger

router = APIRouter()


@router.get("/test", response_model_by_alias=False)
def test():
    return dict({"name": "Testing"})

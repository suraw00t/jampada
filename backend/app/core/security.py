from datetime import datetime, timedelta
from typing import Any

from jose import jwt

# from app.core import settings
from app.core.config import AppSettings

settings = AppSettings()

ALGORITHM = "HS256"


def create_access_token(
    subject: str | Any, expires_delta: timedelta = None, data: dict = {}
) -> str:
    if expires_delta:
        expire = datetime.now() + expires_delta
    else:
        expire = datetime.now() + timedelta(
            minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES
        )
    to_encode = {"exp": expire, "sub": str(subject), "data": data}
    encoded_jwt = jwt.encode(to_encode, settings.SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


def create_refresh_token(
    subject: str | Any, expires_delta: timedelta = None, data: dict = {}
) -> str:
    if expires_delta:
        expire = datetime.now() + expires_delta
    else:
        expire = datetime.now() + timedelta(
            minutes=settings.REFRESH_TOKEN_EXPIRE_MINUTES
        )
    to_encode = {"exp": expire, "sub": str(subject), "data": data}
    encoded_jwt = jwt.encode(to_encode, settings.SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


def verify_token(token: str):
    decode_jwt = jwt.decode(token=token, algorithms=ALGORITHM, key=settings.SECRET_KEY)
    return decode_jwt

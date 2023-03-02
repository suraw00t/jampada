from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import jwt
from pydantic import ValidationError

from .. import models
from . import security

reusable_oauth2 = OAuth2PasswordBearer(tokenUrl="/api/v1/users/login")


def get_current_user(token: str = Depends(reusable_oauth2)) -> models.User:
    try:
        payload = jwt.decode(
            token, security.settings.SECRET_KEY, algorithms=[security.ALGORITHM]
        )
    except (jwt.JWTError, ValidationError):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Could not validate credentials",
        )

    user = models.User.objects(id=payload.get("sub")).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user


def get_current_active_user(
    current_user: models.User = Depends(get_current_user),
) -> models.User:
    if current_user.status != "activate":
        raise HTTPException(status_code=400, detail="Inactive user")
    return current_user


def get_current_active_superuser(
    current_user: models.User = Depends(get_current_user),
) -> models.User:
    if "admin" not in current_user.roles:
        raise HTTPException(
            status_code=400, detail="The user doesn't have enough privileges"
        )
    return current_user


def create_logs(action, request, current_user):
    request_log = models.RequestLog(
        user=current_user,
        ip_address=request.client.host,
        action=action,
        user_agent=request.headers.get("user-agent", ""),
    )
    return request_log

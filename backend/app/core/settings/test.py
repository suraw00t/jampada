import logging

from pydantic import SecretStr

from . import AppSettings


class TestAppSettings(AppSettings):
    DEBUG: bool = True

    TITLE: str = "Test jampada application"

    SECRET_KEY: SecretStr = SecretStr("test_secret")

    LOGGING_LEVEL: int = logging.DEBUG

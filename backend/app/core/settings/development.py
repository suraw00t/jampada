import logging

from . import AppSettings


class DevAppSettings(AppSettings):
    DEBUG: bool = True
    LOGGING_LEVEL: int = logging.DEBUG

    class Config(AppSettings.Config):
        env_file = ".env"

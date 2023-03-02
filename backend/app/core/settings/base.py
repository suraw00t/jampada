from enum import Enum

from pydantic import BaseSettings


class AppEnvTypes(Enum):
    prod: str = "prod"
    dev: str = "dev"
    test: str = "test"


class BaseAppSettings(BaseSettings):
    APP_ENV: AppEnvTypes = AppEnvTypes.prod

    class Config:
        env_file = ".env"

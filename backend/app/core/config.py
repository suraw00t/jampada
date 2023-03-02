from functools import lru_cache
from typing import Dict, Type

from .settings import (
    AppSettings,
    AppEnvTypes,
    BaseAppSettings,
    DevAppSettings,
    ProdAppSettings,
    TestAppSettings,
)

environments: Dict[AppEnvTypes, Type[AppSettings]] = {
    AppEnvTypes.dev: DevAppSettings,
    AppEnvTypes.prod: ProdAppSettings,
    AppEnvTypes.test: TestAppSettings,
}


@lru_cache
def get_app_settings() -> AppSettings:
    app_env = BaseAppSettings().APP_ENV
    config = environments[app_env]
    return config()


settings = get_app_settings()

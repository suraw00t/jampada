from . import AppSettings


class ProdAppSettings(AppSettings):

    MONGODB_HOST: str = "jampada-mongodb"

    class Config(AppSettings.Config):
        env_file = "prod.env"

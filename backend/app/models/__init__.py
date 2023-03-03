from .users import User
from .sports import Sport
from .topics import Topic


def init_mongoengine(settings):
    import mongoengine as me

    dbname = settings.MONGODB_DB
    host = settings.MONGODB_HOST
    port = settings.MONGODB_PORT
    username = settings.MONGODB_USERNAME
    password = settings.MONGODB_PASSWORD

    me.connect(db=dbname, host=host, port=port, username=username, password=password)

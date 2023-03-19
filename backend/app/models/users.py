import mongoengine as me
import datetime
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


class User(me.Document):
    meta = {
        "collection": "users",
        "indexes": [
            "username",
            "$username",
            "#username",
        ],
    }
    email = me.StringField(required=True, max_length=200, min_length=1)
    username = me.StringField(required=True, max_length=200, unique=True, min_length=4)
    password = me.StringField()
    first_name = me.StringField(required=True, max_length=200, min_length=1)
    last_name = me.StringField(required=True, max_length=200, min_length=1)
    phone = me.StringField(min_length=1)
    # picture = me.ImageField(thumbnail_size=(800, 600, True))
    status = me.StringField(required=True, default="active", max_length=15)
    roles = me.ListField(me.StringField(), default=["user"])
    created_date = me.DateTimeField(required=True, default=datetime.datetime.now)
    updated_date = me.DateTimeField(required=True, default=datetime.datetime.now)
    last_login_date = me.DateTimeField(
        required=True, default=datetime.datetime.now, auto_now=True
    )

    def has_roles(self, roles):
        for role in roles:
            if role in self.roles:
                return True
        return False

    def set_password(self, plain_password):
        self.password = pwd_context.hash(plain_password)

    def verify_password(self, plain_password):
        return pwd_context.verify(plain_password, self.password)

import mongoengine as me
from datetime import datetime


class Topic(me.Document):
    meta = {"collection": "topics"}

    name = me.StringField(max_length=60)
    level = me.StringField(required=True)
    date_time = me.DateTimeField(required=True)
    place = me.StringField(required=True)
    detail = me.StringField(max_length=120)
    # owner = me.ReferenceField("User", dbref=True, required=True)
    created = me.DateTimeField(required=True, default=datetime.now)
    updated = me.DateTimeField(required=True, default=datetime.now, auto_now=True)
    status = me.StringField(required=True, default="active")

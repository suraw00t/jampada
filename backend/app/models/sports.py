import mongoengine as me
from datetime import datetime


class Sport(me.Document):
    meta = {"collection": "sports"}

    name = me.StringField(required=True)
    detail = me.StringField(required=True)
    # owner = me.ReferenceField("User", dbref=True, requird=True)
    created = me.DateTimeField(required=True, default=datetime.now)
    updated = me.DateTimeField(required=True, default=datetime.now, auto_now=True)

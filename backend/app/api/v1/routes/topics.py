from fastapi import APIRouter, HTTPException, Depends
from starlette.status import (
    HTTP_401_UNAUTHORIZED,
    HTTP_404_NOT_FOUND,
    HTTP_409_CONFLICT,
)
from mongoengine.errors import DoesNotExist
import datetime
from typing import List

from app.core.deps import (
    get_current_user,
    get_current_active_user,
    get_current_active_superuser,
)
from app.core import verify_token
from app import models
from app.schemas import Topic, TopicCreate, User, CreateToken, ListUser

router = APIRouter()


@router.post("/create", response_model=Topic)
async def create_topic(access_token: str, topic_schema: TopicCreate):
    decode_jwt = verify_token(access_token)
    user_id = decode_jwt.get("sub")
    try:
        user = models.User.objects.get(id=user_id)
    except DoesNotExist as e:
        raise HTTPException(status_code=HTTP_404_NOT_FOUND, detail=str(e))
    topic = models.Topic(**topic_schema.dict())
    topic.owner = user
    topic.save()
    members = []
    for member in topic.member:
        mem = ListUser(id=str(member.id), username=member.username)
        members.append(mem)
    return Topic(
        id=str(topic.id),
        member=members,
        level=topic.level,
        place=topic.place,
        player=topic.player,
        date_time=topic.date_time,
        detail=topic.detail,
        type=topic.type,
        name=topic.name,
    )


@router.put("/edit/{topic_type}/{topic_id}", response_model=Topic)
async def edit_topic(topic_type: str, topic_id: str, topic: TopicCreate):
    topic_db = models.Topic.objects(id=topic_id).first()
    if not topic_db:
        raise HTTPException(status_code=HTTP_404_NOT_FOUND, detail="Topic not found")
    topic_db.level = topic.level
    topic_db.place = topic.place
    topic_db.player = topic.player
    topic_db.detail = topic.detail
    topic_db.date_time = topic.date_time
    topic_db.save()
    members = []
    for member in topic_db.member:
        mem = ListUser(id=str(member.id), username=member.username)
        members.append(mem)
    return Topic(
        id=str(topic_db.id),
        member=members,
        level=topic_db.level,
        place=topic_db.place,
        player=topic_db.player,
        date_time=topic_db.date_time,
        detail=topic_db.detail,
        type=topic_db.type,
        name=topic_db.name,
    )


@router.get("/all", response_model=List[Topic])
async def get_all():
    topics = models.Topic.objects.all()
    topics_schema = []
    for topic in topics:
        members = []
        for member in topic.member:
            mem = ListUser(id=str(member.id), username=member.username)
            members.append(mem)
        top = Topic(
            id=str(topic.id),
            member=members,
            level=topic.level,
            place=topic.place,
            player=topic.player,
            date_time=topic.date_time,
            detail=topic.detail,
            type=topic.type,
            name=topic.name,
        )
        topics_schema.append(top)

    return topics_schema


@router.get("/{topic_type}", response_model=List[Topic])
async def get_topic_by_type(topic_type: str):
    topics = models.Topic.objects(type=topic_type)
    if not topics:
        raise HTTPException(status_code=HTTP_404_NOT_FOUND, detail="No topic data")

    topics_schema = []
    for topic in topics:
        members = []
        for member in topic.member:
            mem = ListUser(id=str(member.id), username=member.username)
            members.append(mem)
        top = Topic(
            id=str(topic.id),
            member=members,
            level=topic.level,
            place=topic.place,
            player=topic.player,
            date_time=topic.date_time,
            detail=topic.detail,
            type=topic.type,
            name=topic.name,
        )
        topics_schema.append(top)

    return topics_schema
    # return [Topic(id=str(topic.id), **topic.to_mongo().to_dict()) for topic in topics]


@router.get("/{topic_type}/{topic_id}", response_model=Topic)
async def get_single_topic(topic_type: str, topic_id: str):
    topic = models.Topic.objects(id=topic_id).first()
    if not topic:
        raise HTTPException(status_code=HTTP_404_NOT_FOUND, detail="No topics data")
    members = []
    for member in topic.member:
        mem = ListUser(id=str(member.id), username=member.username)
        members.append(mem)
    return Topic(
        id=str(topic.id),
        member=members,
        level=topic.level,
        place=topic.place,
        player=topic.player,
        date_time=topic.date_time,
        detail=topic.detail,
        type=topic.type,
        name=topic.name,
    )


@router.put("/join/{topic_type}/{topic_id}/", response_model=Topic)
async def join_topic(topic_type: str, topic_id: str, token: CreateToken):
    decode_jwt = verify_token(token.token)
    user_id = decode_jwt.get("sub")
    try:
        user = models.User.objects.get(id=user_id)
    except DoesNotExist as e:
        raise HTTPException(status_code=HTTP_404_NOT_FOUND, detail=str(e))
    topic = models.Topic.objects(id=topic_id).first()
    if not topic:
        raise HTTPException(status_code=HTTP_404_NOT_FOUND, detail="Topic not found")
    if not user in topic.member:
        topic.member.append(user)
        topic.updated = datetime.datetime.now()
        topic.save()
    members = []
    for member in topic.member:
        mem = ListUser(id=str(member.id), username=member.username)
        members.append(mem)
    return Topic(
        id=str(topic.id),
        member=members,
        level=topic.level,
        place=topic.place,
        player=topic.player,
        date_time=topic.date_time,
        detail=topic.detail,
        type=topic.type,
        name=topic.name,
    )


@router.put("/unjoin/{topic_type}/{topic_id}/", response_model=Topic)
async def unjoin_topic(topic_type: str, topic_id: str, token: CreateToken):
    decode_jwt = verify_token(token.token)
    user_id = decode_jwt.get("sub")
    try:
        user = models.User.objects.get(id=user_id)
    except DoesNotExist as e:
        raise HTTPException(status_code=HTTP_404_NOT_FOUND, detail=str(e))
    topic = models.Topic.objects(id=topic_id).first()
    if not topic:
        raise HTTPException(status_code=HTTP_404_NOT_FOUND, detail="Topic not found")
    if user in topic.member:
        topic.member.remove(user)
        topic.updated = datetime.datetime.now()
        topic.save()
    members = []
    for member in topic.member:
        mem = ListUser(id=str(member.id), username=member.username)
        members.append(mem)
    return Topic(
        id=str(topic.id),
        member=members,
        level=topic.level,
        place=topic.place,
        player=topic.player,
        date_time=topic.date_time,
        detail=topic.detail,
        type=topic.type,
        name=topic.name,
    )


@router.delete("/delete", response_model=Topic)  # delete topic
async def delete_topic(topic_id: str):
    try:
        topic = models.Topic.objects.get(id=topic_id)
    except DoesNotExist as e:
        raise HTTPException(status_code=HTTP_404_NOT_FOUND, detail=str(e))
    topic.delete()
    members = []
    for member in topic.member:
        mem = ListUser(id=str(member.id), username=member.username)
        members.append(mem)
    return Topic(
        id=str(topic.id),
        member=members,
        level=topic.level,
        place=topic.place,
        player=topic.player,
        date_time=topic.date_time,
        detail=topic.detail,
        type=topic.type,
        name=topic.name,
    )

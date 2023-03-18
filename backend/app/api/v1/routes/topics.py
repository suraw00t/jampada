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
async def create_topic(access_token: str, topic: TopicCreate):
    decode_jwt = verify_token(access_token)
    user_id = decode_jwt.get("sub")
    try:
        user = models.User.objects.get(id=user_id)
    except DoesNotExist as e:
        raise HTTPException(status_code=HTTP_404_NOT_FOUND, detail=str(e))
    new_topic = models.Topic(**topic.dict())
    new_topic.owner = user
    new_topic.save()
    return Topic(id=str(new_topic.id), **new_topic.to_mongo().to_dict())


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
    return Topic(id=str(topic_db.id), **topic_db.to_mongo().to_dict())


@router.get("/all", response_model=List[Topic])
async def get_all():
    topics = models.Topic.objects.all()
    return [Topic(id=str(topic.id), **topic.to_mongo().to_dict()) for topic in topics]


@router.get("/{topic_type}", response_model=List[Topic])
async def get_topic_by_type(topic_type: str):
    topics = models.Topic.objects(type=topic_type)
    if not topics:
        raise HTTPException(status_code=HTTP_404_NOT_FOUND, detail="No topics data")
    return [Topic(id=str(topic.id), **topic.to_mongo().to_dict()) for topic in topics]


@router.get("/{topic_type}/{topic_id}", response_model=Topic)
async def get_single_topic(topic_type: str, topic_id: str):
    topic = models.Topic.objects(id=topic_id).first()
    if not topic:
        raise HTTPException(status_code=HTTP_404_NOT_FOUND, detail="No topics data")
    members = []
    for member in topic.member:
        members.append(ListUser(id=str(member.id), username=member.username))
    print(members)
    return Topic(id=str(topic.id), **topic.to_mongo().to_dict())


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
    topic.member.append(user)
    topic.save()
    return Topic(id=str(topic.id), **topic.to_mongo().to_dict())


@router.delete("/delete", response_model=Topic)  # delete topic
async def delete_topic(topic_id: str):
    try:
        del_topic = models.Topic.objects.get(id=topic_id)
    except DoesNotExist as e:
        raise HTTPException(status_code=HTTP_404_NOT_FOUND, detail=str(e))
    del_topic.delete()
    return Topic(id=str(del_topic.id), **del_topic.to_mongo().to_dict())

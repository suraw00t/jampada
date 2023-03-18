from fastapi import APIRouter, HTTPException
from starlette.status import (
    HTTP_401_UNAUTHORIZED,
    HTTP_404_NOT_FOUND,
    HTTP_409_CONFLICT,
)
from mongoengine.errors import DoesNotExist
import datetime
from typing import List

from app.schemas import Topic, TopicCreate
import app.models as models

router = APIRouter()


@router.post("/create", response_model=Topic)
async def create_topic(topic: TopicCreate):
    new_topic = models.Topic(**topic.dict())
    new_topic.save()
    return Topic(
        id=str(new_topic.id),
        # date_time=str(new_topic.date_time),
        **new_topic.to_mongo().to_dict()
    )


@router.get("/all", response_model_by_alias=False, response_model=List[Topic])
async def get_all():
    topics = models.Topic.objects.all()
    return [
        Topic(
            id=str(topic.id),
            date_time=str(topic.date_time),
            **topic.to_mongo().to_dict()
        )
        for topic in topics
    ]


@router.get("/{topic_id}", response_model_by_alias=False, response_model=Topic)
async def get_single_topic(topic_id: str):
    try:
        topic = models.Topic.objects.get(id=topic_id)
    except DoesNotExist as e:
        raise HTTPException(status_code=HTTP_404_NOT_FOUND, detail=str(e))
    print(topic.date_time.isoformat())
    return Topic(
        id=str(topic.id),
        date_time=topic.date_time.isoformat(),
        **topic.to_mongo().to_dict()
    )


@router.post("/join/{user_id}{topic_id}")
async def join_topic(user_id, topic_id):
    return ""


@router.delete("/delete/{topic_id}", response_model=Topic)  # delete topic
async def delete_topic(topic_id):
    try:
        del_topic = models.Topic.objects.get(id=topic_id)
    except DoesNotExist as e:
        raise HTTPException(status_code=HTTP_404_NOT_FOUND, detail=str(e))
    del_topic.delete()
    return Topic(
        id=str(del_topic.id),
        date_time=str(del_topic.date_time),
        **del_topic.to_mongo().to_dict()
    )

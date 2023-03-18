from fastapi import APIRouter

from app.schemas import Topic, TopicCreate
import app.models as models
import datetime

router = APIRouter()


@router.post("/create")
async def create_topic(topic: TopicCreate):
    new_topic = models.Topic(**topic.dict())
    new_topic.date_time = datetime.datetime.utcfromtimestamp(int(topic.date_time))
    new_topic.save()
    return {"message": "Create topic successfull"}


@router.get("/all", response_model_by_alias=False)
async def get_all():
    topics = models.Topic.objects.all()
    return topics.to_json()


@router.post("/join/{user_id}{topic_id}")
async def join_topic(user_id, topic_id):
    return ""

@router.delete("/delete/{topic_id}") #delete topic
async def delete_topic(topic_id):
    del_topic = models.Topic.objects.get(id = topic_id)
    del_topic.delete() 
    return {"message": "Delete topic successfull"}
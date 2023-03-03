from fastapi import APIRouter

# from app.api.v1.routes import products
from . import users, topics, sports

router = APIRouter()
router.include_router(users.router, tags=["users"], prefix="/user")
router.include_router(topics.router, tags=["topics"], prefix="/topic")
router.include_router(sports.router, tags=["sports"], prefix="/sport")

from fastapi import APIRouter

# from app.api.v1.routes import products
from . import users

router = APIRouter()
router.include_router(users.router, tags=["users"], prefix="/user")

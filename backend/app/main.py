from fastapi import FastAPI
<<<<<<< HEAD
from fastapi.exceptions import RequestValidationError
from starlette.exceptions import HTTPException
from starlette.middleware.cors import CORSMiddleware

from app.api.errors import http_error_handler

from app.api.errors import http422_error_handler

from app.api.v1.routes.api import router as api_router_v1
from app.core import get_app_settings
from app.models import init_mongoengine


def get_application() -> FastAPI:
    settings = get_app_settings()
    settings.configure_logging()
    application = FastAPI(**settings.fastapi_kwargs)
    application.add_middleware(
        CORSMiddleware,
        allow_origins=settings.ALLOWED_HOSTS,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    application.add_exception_handler(HTTPException, http_error_handler)
    application.add_exception_handler(RequestValidationError, http422_error_handler)

    application.include_router(api_router_v1, prefix=f"{settings.API_PREFIX}/v1")
    init_mongoengine(settings)
    return application
=======

app = FastAPI()

@app.get("/")

async def root():

    return {"message": "Hello Satan"}

@app.get("/result/{score}")

async def result_exam(score):

    score = int(score)

    if(score >= 50):

        result = "Pass"

    else:    

        result = "No pass"

    return {"your result is": result}
>>>>>>> ad6c22296dcc87eda3eea1367e446f3b87f05c1e

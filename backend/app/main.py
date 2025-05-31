from fastapi import FastAPI
from routers.track import router
from database import engine, Base
Base.metadata.create_all(bind=engine)
app = FastAPI(
    title="SUNA Bot API",
    description="API для управления треками",
    version="1.0.0"
)

app.include_router(router)
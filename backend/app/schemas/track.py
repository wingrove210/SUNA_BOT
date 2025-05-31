from pydantic import BaseModel
from typing import Optional

class TrackBase(BaseModel):
    title: str
    artist: str
    image: str
    track: str

class TrackCreate(TrackBase):
    pass

class TrackUpdate(BaseModel):
    title: Optional[str] = None
    artist: Optional[str] = None
    image: Optional[str] = None
    track: Optional[str] = None

class TrackInDBBase(TrackBase):
    id: int

    class Config:
        from_attributes = True

class Track(TrackInDBBase):
    pass
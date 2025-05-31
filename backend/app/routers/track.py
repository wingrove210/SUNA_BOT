from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from database import get_db
from crud import track as crud_track
from schemas.track import Track, TrackCreate, TrackUpdate

router = APIRouter(
    prefix="/tracks",
    tags=["tracks"]
)

@router.get("/", response_model=List[Track])
def read_tracks(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud_track.get_tracks(db, skip=skip, limit=limit)

@router.get("/{track_id}", response_model=Track)
def read_track(track_id: int, db: Session = Depends(get_db)):
    db_track = crud_track.get_track(db, track_id=track_id)
    if db_track is None:
        raise HTTPException(status_code=404, detail="Track not found")
    return db_track

@router.post("/", response_model=Track)
def create_track(track_in: TrackCreate, db: Session = Depends(get_db)):
    return crud_track.create_track(db, track_in=track_in)

@router.put("/{track_id}", response_model=Track)
def update_track(track_id: int, track_in: TrackUpdate, db: Session = Depends(get_db)):
    db_track = crud_track.update_track(db, track_id=track_id, track_in=track_in)
    if db_track is None:
        raise HTTPException(status_code=404, detail="Track not found")
    return db_track

@router.delete("/{track_id}", response_model=Track)
def delete_track(track_id: int, db: Session = Depends(get_db)):
    db_track = crud_track.delete_track(db, track_id=track_id)
    if db_track is None:
        raise HTTPException(status_code=404, detail="Track not found")
    return db_track

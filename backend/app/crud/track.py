from sqlalchemy.orm import Session
from models.track import Track
from schemas.track import TrackCreate, TrackUpdate

def get_track(db: Session, track_id: int):
    return db.query(Track).filter(Track.id == track_id).first()

def get_tracks(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Track).offset(skip).limit(limit).all()

def create_track(db: Session, track_in: TrackCreate):
    db_track = Track(
        **track_in.dict(exclude_unset=True)
    )
    db.add(db_track)
    db.commit()
    db.refresh(db_track)
    return db_track

def update_track(db: Session, track_id: int, track_in: TrackUpdate):
    db_track = db.query(Track).filter(Track.id == track_id).first()
    if not db_track:
        return None
    for field, value in track_in.dict(exclude_unset=True).items():
        setattr(db_track, field, value)
    db.commit()
    db.refresh(db_track)
    return db_track

def delete_track(db: Session, track_id: int):
    db_track = db.query(Track).filter(Track.id == track_id).first()
    if not db_track:
        return None
    db.delete(db_track)
    db.commit()
    return db_track
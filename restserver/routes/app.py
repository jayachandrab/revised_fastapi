from fastapi import APIRouter,Depends
from config.db import conn,engine,Base,SessionLocal
from models.index import users
from schemas.index import User
from sqlalchemy.orm import Session
from models.users import Profile

Base.metadata.create_all(bind=engine)

user = APIRouter()

def get_db():
    db=SessionLocal()
    try:
        yield db
    finally:
        db.close()

@user.get("/api/")
async def read_data(db:Session=Depends(get_db)):
    profiles=db.query(Profile).all()

    return profiles


@user.get("/{id}")
async def read_data(id:int,db:Session=Depends(get_db)):
   
    profile=db.query(Profile).filter(Profile.id==id).first()
    return profile
    

@user.post("/api/addProfile/")
async def write_data(request:User,db:Session=Depends(get_db)):
    name=request.first_name+" "+request.last_name
    new_profile=Profile(name=name,current_job=request.current_job,
    current_company=request.current_company,job_description=request.job_description,email=request.email)
   
    db.add(new_profile)
    db.commit()
    db.refresh(new_profile)
    return new_profile


@user.get("/api/getResumeByName/{name}")
async def read_data(name:str,db:Session=Depends(get_db)):
   
    profiles=db.query(Profile).filter(Profile.name.contains(name)).all()
    return profiles

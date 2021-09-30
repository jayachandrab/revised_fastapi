from sqlalchemy import Table,Column,MetaData
from sqlalchemy.sql.sqltypes import Integer, String
from config.db import Base
from config.db import meta

users=Table(
    "profiles",meta,
    Column('id',Integer,primary_key=True,autoincrement=True),
     Column('name',String(255)),
      Column('current_job',String(255)),
      Column('job_description',String(255)),
      Column('current_company',String(255)),
      Column('email',String(255)),

)

class Profile(Base):
    __tablename__="profiles"
    id=Column(Integer,primary_key=True,index=True,autoincrement=True)
    name=Column(String(255))
    current_job=Column(String(255))
    job_description=Column(String(255))
    current_company=Column(String(255))
    email=Column(String(255))
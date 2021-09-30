from pydantic import BaseModel

class User(BaseModel):
    first_name:str 
    last_name:str
    current_job:str
    job_description:str
    current_company:str
    email:str
    

    

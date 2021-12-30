1. Download the restserver code from below link
https://github.com/jayachandrab/revised_fastapi

2. After downloading, you need to have python3 or above installed in your system
3. Then install Mysql in your system or ignore if you have already isntalled mysql in your system
4. Create database called test
5. Then create virtual using below command

python -m venv serv (virtual environment name)

then issue the below command it will enable virtual environment for the current project

source environment/Scripts/activate (in mac)
.\environment\Scripts\activate (in windows)

6. Then give the below command from where the requirements.txt file present

pip install -r requirements.txt

the above command will isntall all the project dependenies

7. After succesfull installation of requirements.txt, issue the below command

uvicorn main:app 

The above command will run the server on below url

http://127.0.0.1:8000/docs (it will display all the backend end Points)

it will be used by the frontdend to get the data and add the data

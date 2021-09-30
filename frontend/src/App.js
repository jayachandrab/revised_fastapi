
import './App.css';

import React,{useState,useEffect} from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoView from './components/TotDoList';



function App()
 {

  const [todoList,setTodoList]=useState([{}])
  const [first_name,setFirstName]=useState('')
  const [last_name,setLastName]=useState('')
  const [current_job,setCurrentRole]=useState('')
  const [current_company,setCurrentCompany]=useState('')
  
  const [job_description,setJobDescription]=useState('')
  const [email,setEmal]=useState('')
  // [fist_name,setFirstName]=useState('')

  const [desc,setDesc]=useState('')

  useEffect(()=>{
    axios.get('http://localhost:8000/api/')
    .then(res=>{
        setTodoList(res.data)
    })
  });

  const addProfile=()=>{

    axios.post('http://localhost:8000/api/addProfile/',{'first_name':first_name,'last_name':last_name,'current_job':current_job,
  'current_company':current_company,'email':email,'job_description':job_description})
    .then(
      res=>{
        console.log(res);
        var data=JSON.stringify(res.data);
      alert(data);
    }

      )
  }
  return (
    <div className="App list-group-item justify-content-center align-items-center mx-auto">
     <div class="card-body">
        
       
            <h5 className="card text-white bg-dark mb-3">Add profile</h5>
            <input className="mb-2 form-control desIn" placeholder="first Name" onChange={
              event=>setFirstName(event.target.value)
            }></input>
            <input className="mb-2 form-control desIn" placeholder="last Name" onChange={
              event=>setLastName(event.target.value)
            }></input>
            <input className="mb-2 form-control desIn" placeholder="current job" onChange={
              event=>setCurrentRole(event.target.value)
            }></input>
            <input className="mb-2 form-control desIn" placeholder="current company" onChange={
              event=>setCurrentCompany(event.target.value)
            }></input>
            <input className="mb-2 form-control desIn" placeholder="email" onChange={
              event=>setEmal(event.target.value)
            }></input>

<input className="mb-2 form-control desIn" placeholder="job description" onChange={
              event=>setJobDescription(event.target.value)
            }></input>

            <button type="" onClick={addProfile} className="btn btn-outline-primary mx-2" style={{'borderRadius':'50px','font-weight':"bold"}}>Add Proofile</button>
        <div>
          <TodoView todoList={todoList} />
        </div>
     </div>
    </div>
  );
}

export default App;

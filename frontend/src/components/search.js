// import axios from "axios";
// import React from "react";
// import React,{useState,useEffect} from 'react';
// const [name,setName]=useState('')

// function SearchProfile2(props){
//     const searchHandler2=(name)=>{
//         axios.post('http://localhost:8000//api/getResumeByName/${name}').then(res=>
//         console.log(res.data)
        
//         )
//     }
//     return (
//         <div>
//             <p>
//             <input className="mb-2 form-control desIn" placeholder="email" onChange={
//               event=>setName(event.target.value)
//             }></input>
//             <button onClick={()=>searchHandler2(props.todo.name)} className="btn btn-outline-danger my-2 mx-2"
//             style={{'borderRadius':'50px',}}>
//                     Search
//             </button>
            

//             </p>
//         </div>
//     )
// }

// export default SearchProfile2;
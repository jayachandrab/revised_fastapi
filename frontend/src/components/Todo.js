import axios from "axios";
import React from "react";

function SearchProfile(props){
 
    return (
      
           
                    <tr><td>{props.todo.name}</td><td>{props.todo.current_job}</td>
                    <td>{props.todo.current_company}</td>
                    </tr>
            
    )
}

export default SearchProfile;
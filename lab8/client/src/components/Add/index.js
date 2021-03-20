
import Axios from 'axios';
import {useState} from 'react';

function Add() {

        const [search, setSearch] = useState("");
        
    function addName() {
    
    Axios.put("http://localhost:45040/people/" + search)
          .then((response) => {
             console.log(response.data)
          })
           .catch((error) => {
              console.log("The error was " + error);
          })
    }
    
    return (
        <div>
            <p>Add a name</p>
                <input type="text" onChange={(event) => {
                    setSearch(event.target.value);
                }} />
                <button onClick={() => addName()
                    }>Add Names</button>
                {
                    <p>Added: {search}</p>
                }
          </div>
      )
} 

export default Add;
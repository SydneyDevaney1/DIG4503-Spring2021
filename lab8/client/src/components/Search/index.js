import Axios from 'axios';
import {useState} from 'react';

function Search() {

    const [search, setSearch] = useState("");
    //const [searchResults, setSearchResults] = useState([]);

    function searchNames () {
        Axios.get("http://localhost:45030/people/" + search)
        .then((response) => {
          console.log(response.data);
          //setSearchResults(response.data.search);
        })
        .catch(error => {
          console.log("error" + error);
        });
      
    };

return(
    <div>
        <p>Seach for a name</p>
    <input type="text" onChange={(event) => {
        setSearch(event.target.value)} }/>
      <button onClick = {() => 
        searchNames()}> Search Names</button>
      {
       <p>Searched: {search}</p>
      }
     </div>
    );
}

export default Search;
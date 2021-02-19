import React from 'react';
import {useState} from 'react';
import Axios from 'axios';
import Pokemon from '../Pokemon/index.js';

function Search() {

const [search, setSearch] = useState("");

const [pokemon, setPokemon] = useState({name:"loading...", id:"loading...", sprites:{front_default:null}});

//const [loading, setLoading] = useState(false);

function searchPokemon() {

Axios.get('https://pokeapi.co/api/v2/pokemon/' + search)
// And then...
.then(function (response) {
    // Use the 'data'
    setPokemon(response.data);

})
.catch(function (error) {
    // handle error
    console.log("Error: " + error);
    setPokemon({name:"Is not found", id:"Is not found", sprites:{front_default:null}});
});
}

  return (
    <div className="App">
      <input type="text" onChange={(event) => {
        setSearch(event.target.value);
      }}/>
      <button onClick={() => searchPokemon()}> Search</button>
      {
        <p>Searched: {search}</p>
      }
      <Pokemon pokemon = {pokemon}/>
    </div>
  );
}

export default Search;

import Axios from 'axios';
import {useState} from 'react';

function ReadCoffee() {

const[rank, setRank] = useState("");   
const[coffee, setCoffee] = useState("");    
const[location, setLocation] = useState("");
const[rating, setRating] = useState("");


    const getCoffee = async() => {
        const response = await Axios.get("http://localhost:45040/shops/" + rank, {
            coffee:  coffee,
            location: location,
            rating: rating
        });
        console.log(response.data);
    }
    return (
        <div className="read"><h3>Read your favorite Coffee Shop!</h3>
            <input 
            type = "text" 
            placeholder="Rank" 
            value={rank} 
            onChange={(event) => setRank(event.target.value)}
            />
            <input 
            type = "text" 
            placeholder="Coffee Shop" 
            value={coffee} 
            onChange={(event) => setCoffee(event.target.value)}
            />
            <input 
            type = "text" 
            placeholder="Location" 
            value={location} 
            onChange={(event) => setLocation(event.target.value)}
            />
            <input 
            type = "text" 
            placeholder="Rating " 
            value={rating} 
            onChange={(event) => setRating(event.target.value)}
            />
           <br></br>
            <button onClick = {() => {getCoffee()}}>Read Coffee Shop</button>
            {
            <p> Read: {rank} {coffee} {location} {rating}</p>
        }
        </div>
    );

}

export default ReadCoffee;
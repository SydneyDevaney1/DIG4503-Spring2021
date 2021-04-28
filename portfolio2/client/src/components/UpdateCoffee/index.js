import Axios from 'axios';
import {useState} from 'react';

function UpdateCoffee() {

const[rank, setRank] = useState("");   
const[coffee, setCoffee] = useState("");    
const[location, setLocation] = useState("");
const[rating, setRating] = useState("");


    const patchCoffee = async() => {
        const response = await Axios.patch("http://localhost:45040/shops/" + rank, {
            coffee:  coffee,
            location: location,
            rating: rating
        });
        console.log(response.data);
    }
    return (
        <div className="update"><h3>Update your favorite Coffee Shop!</h3>
            
            <input 
            type = "text" 
            placeholder="rank" 
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
            <button onClick = {() => {patchCoffee()}}>Update Coffee Shop</button>
            
        </div>
    );

}

export default UpdateCoffee;
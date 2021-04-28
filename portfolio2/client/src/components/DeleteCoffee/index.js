import Axios from 'axios';
import {useState} from 'react';

function DeleteCoffee() {

const[rank, setRank] = useState("");   
const[coffee, setCoffee] = useState("");    
const[location, setLocation] = useState("");
const[rating, setRating] = useState("");


    const deleteCoffee = async() => {
        const response = await Axios.delete("http://localhost:45040/shops/" + rank, {
            coffee:  coffee,
            location: location,
            rating: rating
        });
        console.log(response.data);
    }
    return (
        <div className="delete"><h3>Delete a Coffee Shop!</h3>
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
            placeholder="Rating" 
            value={rating} 
            onChange={(event) => setRating(event.target.value)}
            />
            <br></br>
            <button onClick = {() => {deleteCoffee()}}>Delete Coffee Shop</button>
            {
            <p> Deleted: {rank} {coffee} {location} {rating}</p>
        }
        </div>
    );

}

export default DeleteCoffee;
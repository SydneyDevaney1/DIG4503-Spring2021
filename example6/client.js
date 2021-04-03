import Axios from 'axios';
import { response } from 'express';

Axios.get("http://localhost:45035/what?name=sydney")
.then(response => {
    console.log(response.data)
});

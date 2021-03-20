import Axios from 'axios';

Axios.put("http://127.0.0.1:45030/people/Dan")
.then((response) => {
    console.log(response.data);
})
.catch((error) => {
    console.log("the error was" + error);
});

Axios.delete("http://127.0.0.1:45030/people/Dan")
.then((response) => {
    console.log(response.data);
})
.catch((error) => {
    console.log("The error was" + error);
})
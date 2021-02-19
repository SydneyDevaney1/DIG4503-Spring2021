import {useState} from 'react';

function App() {

 const [counter, setCounter] = useState(0);
 


  return (
    <div className="App">
      <button onClick={ ()=>{
        setCounter (5);
        console.log(counter);
      } } > Click me </button>
      {counter}
    </div>
  );
}

export default App;

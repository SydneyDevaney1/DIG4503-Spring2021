import CreateCoffee from './components/CreateCoffee';
import DeleteCoffee from './components/DeleteCoffee';
import ReadCoffee from './components/ReadCoffee';
import UpdateCoffee from './components/UpdateCoffee';
import './App.css';


function App() {
  return (
    <div>
      <h1>Best Coffee Shops in Orlando, FL</h1>
    <div className="App">
      <div> <CreateCoffee className="Create"/> </div>
      <div><UpdateCoffee className="Update"/></div>
      <div><ReadCoffee className="Read"/></div>
      <div><DeleteCoffee className="Delete"/></div>
    
      
    </div>
    
    </div>
   
  );
}

export default App;

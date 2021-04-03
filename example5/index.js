import Express from 'express';
import Database from './Database.js';

const App = Express();
const port = 45030;

const d = new Database();

// A GET route.
//
// Request parameter of "id"
App.put("/people/:person", (req, res) => {

    let person = req.params.person;

    d.createOne(person);

    res.json({person: person})
        
    });

App.get("/people/:person", (req, res) => {

    let person = req.params.person;
    
    let result = d.readOne(person);
    
    res.json(result)
            
});

 App.delete("/people/:person", (req, res) => {

    let person = req.params.person;
    
    d.deleteMany(person);
    
    res.json({person: person})
            
});   
// Listen on a port.
App.listen(port, () => {
    console.log("Server running!");
});
import Express from 'express';
import Database from './Database.js';
import CORS from 'cors';

const App = Express();
const port = 45040;
//Allows us tp use request bosdies and translates it our of JSON
App.use(Express.json());
App.use(CORS());

//Creating new Database object
const db = new Database();
//Database.connect()
db.connect("portfolio2", "SydneyDevaney");

//PUT (App.put)-> Database.createOne() -> collections.insertOne()
App.put("/shops/:rank", async (req, res) => {
    
    //Request parameter ID
    const rank = req.params.rank;

    //Request body properties
    const coffee = req.body.coffee;
    const location = req.body.location;
    const rating = req.body.rating;


    const result = await db.createOne(rank, coffee, location, rating);
    res.json(result);

   
     
  // res.json({
       // ISBN: ISBN,
       // title: title,
       // author: author,
        //description: description,
   //})
    
});

//GET (App.get)->Database.readOne() -> collections. findOne()
App.get("/shops/:ISBN", async (req, res) => {
    const rank = req.params.rank;

    const result = await db.readOne(ISBN);

    res.json(result);
    //const title  = req.body.title;
    //const author = req.body.author;
    //const description = req.body.description;


});


//PATCH (App.patch)-> Database.updateOne() -> collections.updateOne()
App.patch("/shops/:rank", async (req, res) => {
    const rank = req.params.rank;

     //Request body properties
     const coffee = req.body.coffee;
     const location = req.body.location;
     const rating = req.body.rating;

    const result = await db.updateOne(rank, coffee, location, rating);
     
    res.json(result);
 
});

//DELETE (App.delete)->Database.deleteOne() -> collection.deleteOne()
App.delete("/shops/:rank", async (req, res) => {
    //Request parameter
    const rank = req.params.rank;
   
    //Talk to db code
    const result = await db.deleteOne(rank);

    res.json(result);
});

App.listen(port);
import Express from 'express';
import Database from './Database.js';

const App = Express();
const port = 45035;
//Allows us tp use request bosdies and translates it our of JSON
App.use(Express.json());

//Creating new Database object
const db = new Database();
//Database.connect()
db.connect("portfolio2", "SydneyDevaney");

//PUT (App.put)-> Database.createOne() -> collections.insertOne()
App.put("/games/:id", (req, res) => {
    
    //Request parameter ID
    const id = req.params.id;

    //Request body properties
    const title = req.body.title;
    const rating = req.body.rating;
    const review = req.body.review;

    res.json({
        id:id,
        title:title,
        rating: rating,
        review: review,
    })
    
});

//GET (App.get)->Database.readOne() -> collections. findOne()
App.get("/games/:id", (req, res) => {
    const id = req.params.id;
    res.json({game: "not found"});

});

//PATCH (App.patch)-> Database.updateOne() -> collections.updateOne()
App.patch("/games/:id", async (req, res) => {
    const id = req.params.id;

     //Request body properties
     const title = req.body.title;
     const rating = req.body.rating;
     const review = req.body.review;

    const result = await db.updateOne(id, title, );
     
    res.json(result);
 
});

//DELETE (App.delete)->Database.deleteOne() -> collection.deleteOne()
App.delete("/games/:id", async (req, res) => {
    //Request parameter
    const id = req.params.id;
   
    //Talk to db code
    const result = await db.deleteOne(id);

    res.json(result);
});

App.listen(port);
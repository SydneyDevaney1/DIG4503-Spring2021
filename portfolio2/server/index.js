import Express from 'express';
import Database from './Database.js';

const App = Express();
const port = 45035;
const data = new Database();
data.connect();

App.use(Express.json());

App.put("portfolio2/:SydneyDevaney", (req, res) => {
    res.json({
        let ,
        requestParameter: req.params.books
    });
});

App.get("portfolio2/:", (req, res) => {
    
});

App.post("portfolio2/search", (req, res) => {
    res.json({
        URLParameters: req.query
    });    
});

App.patch("portfolio2/:", (req, res) => {


    res.json({
        body: req.body,
        requestParameter: req.params.team
    });
});

App.delete("portfolio2/:", (req, res) => {
    
});

App.listen(port), () => {
    console.log("server running");
};
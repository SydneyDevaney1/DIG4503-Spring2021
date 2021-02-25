import Express from 'express';

const App = Express();
const port = 45033;

const person = {
    name: "Sydney Devaney",
    favoritecolor: "yellow"
}

App.get("/", function(req,res){
    res.send("Hi!");
});

App.get("/person", function(req, res){
    res.json(person);
});



App.listen(port, function() {
    console.log("Server is running");
});
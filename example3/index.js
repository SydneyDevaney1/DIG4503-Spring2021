import Express from 'express';

const App = Express();
const port = 45033;

const arrayExample = [
    "hey",
    "hi",
    "hello",
    "howdy"
];

App.get("/collection/:resource", (req,res) => {

    let result = {names: "Not Found"};
    
    let arrayResult = [];

    arrayExample.forEach((value) => {
        if(value.includes(req.params.resource)) {
            arrayResult.push(value)
        }
    });

    if(arrayResult.length > 0) {
        result = {names:arrayResult};
    }

    res.json(result);
});

App.listen(port, () => {
    console.log("The server is running!");
});
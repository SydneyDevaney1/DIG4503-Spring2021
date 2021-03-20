import Express from 'express';
import CORS from 'cors';

const App = Express();
const port = 45030;

App.use(CORS());

const names = [
    'Cortney',
    'Dewayne',
    'Trenton',
    'Pamala',
    'Ettie',
    'Errol',
    'Lorrie',
    'Hang',
    'Lauryn',
    'Caterina',
    'Isa',
    'Marcela'
];

//Put
App.put("/people/:person", (req,res) => {
    const name = req.params.person;
    //let result = {"name": person}

    names.push(person);
    res.json({name: name});
});

//Get
App.get("/people/:person", (req, res) => {
    let person = req.params.person;
    let result = {"name": "not found"};

    names.forEach((value) => {
        if(value == person) {
            result = {name: value};
        }
    });

    res.json(result);
});

//Get
App.get("/search/:name", (req, res) => {
    let result = {search: ["not found"]};
    let arrayResult = [];

    names.forEach((value) => {
        if(value.includes(req.params.name)) {
            arrayResult.push(value);
        }
    });

    if(arrayResult.length > 0) {
        result = {name:arrayResult};
    }

    res.json(result);
});

App.listen(port, () => {
    console.log("server is running");
});
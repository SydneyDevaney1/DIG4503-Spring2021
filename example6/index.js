import Express from 'express';

const App = Express()
const port = 45035;

App.use(Express.json());

App.put("/:id", (req,res) => {
    res.json(
        {
            body: req.body
        
        }
    );
});

App.listen(port);


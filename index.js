const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


//
app.use(cors());

//for getting body data
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World From NodeJs server');
});

const users = [
    { id: 1, name: 'omuk khan', email: 'omukh@gmail.com', phone: "017342342342" },
    { id: 2, name: 'tomuk khan', email: 'tomukh@gmail.com', phone: "01735552342" },
    { id: 3, name: 'jomuk khan', email: 'jomukh@gmail.com', phone: "017345454234" },
    { id: 4, name: 'promukh khan', email: 'proomukh@gmail.com', phone: "017342342342" },
    { id: 5, name: 'dromukh khan', email: 'dromukh@gmail.com', phone: "017342342342" },
]


//creating api
app.get('/users', (req, res) => {

    //filter query param
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const match = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(match);
    }
    else {
        res.send(users);
    }
});

//dynamic api
app.get('/user/:id', (req, res) => {
    console.log(req.params);//this will return dynamice link as object;
    const id = parseInt(req.params.id);
    const user = users[id];
    const userFind = users.find(user => user.id === id);
    res.send(userFind);
});


app.post('/user', (req, res) => {
    console.log(req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})




app.listen(port, () => {
    console.log('Listening from the port', port);
});
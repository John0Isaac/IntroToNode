const express = require('express');

const app = express();

const appData = {}

const bodyParser = require('body-parser')
/* Middleware */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const cors = require('cors');
app.use(cors());

app.use(express.static('frontend'));

const port = 8000;

const server = app.listen(port, listening);
// Callback to debug
function listening (){
    console.log('server running');
    console.log(`running on localhost: ${port}`);
};


// Movie EXAMPLE
const data = []
app.post('/addMovie', addMovie);
function addMovie (req, res){
    data.push(req.body);
    console.log(data)
};

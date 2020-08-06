// Express to run server and routes
const express = require('express');

// Start up an instance of the app 
const app = express();

// Create JS object
const appData = {}

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware */
// parse application/json
app.use(bodyParser.json());
// Here we are configuring express to use body-parser as middle-ware.
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// CORS for cross origin resourse sharing
const cors = require('cors');
app.use(cors());

// Intialize the main project folder 
app.use(express.static('frontend'));

const port = 8000;
// Spin up the server 
const server = app.listen(port, listening);
// const server = app.listen(port, ()=>{console.log(`running on localhost: ${port}`)});
// Callback to debug
function listening (){
    console.log('server running');
    console.log(`running on localhost: ${port}`);
};

// GET method route
app.get('/', function (req, res) {
    res.send(appData);
  });

// POST method route
app.post('/', function (req, res) {
    res.send('POST received')
  })
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 3000;
require('dotenv').config();

/*
//DB connection, pulls from .env file
mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.on('open', () => console.log("Connected to database"));
*/

//  IDEA: by default, save to a json file? with added
//option to change it to a DB. JSON file doesnt require any
//extras and works OOTB (though the prompts are theoretically
// pubicly available)

//use json to communicate with endpoints
app.use(express.json());

//Endpoints

//prompt manager endpoint
const pmsRouter = require('./routes/pms');
app.use('/pms', pmsRouter);

//prompt forwarder/api manager endpoint
const forwarderRouter = require('./routes/apiManager');
app.use('/forward', forwarderRouter);


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

const express = require('express');
const client = express.Router();

const {validateClient} = require("../validators/clientValidation");
const {index, get, update, store, remove} = require('../controllers/clientController');


//routes for client path

client.get('/clients', index );
client.get('/client/:id', get );
client.post('/client', validateClient ,store );
client.put('/client/:id', validateClient ,update );
client.delete('/client/:id', remove );

module.exports = client;





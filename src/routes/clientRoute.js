
const express = require('express');
const client = express.Router();

const {index, get, update, store, remove} = require('../controllers/clientController');

//routes for client path

client.get('/client', index );
client.get('/client/:id', get );
client.post('/client', store );
client.put('/client/:id', update );
client.delete('/client/:id', remove );

module.exports = client;





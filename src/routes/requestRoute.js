
const express = require('express');
const request = express.Router();

const {index, get, update, store, remove} = require('../controllers/requestController');

//routes for client path

request.get('/requests', index );
request.get('/request/:id', get );
request.post('/request', store );
request.put('/request/:id', update );
request.delete('/request/:id', remove );

module.exports = request;




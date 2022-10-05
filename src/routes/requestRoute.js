
const express = require('express');
const request = express.Router();

const {validateRequest} = require("../validators/requestValidation")
const {index, get, update, store, remove} = require('../controllers/requestController');

//routes for client path

request.get('/requests', index );
request.get('/request/:id', get );
request.post('/request',validateRequest, store );
request.put('/request/:id',validateRequest, update );
request.delete('/request/:id', remove );

module.exports = request;




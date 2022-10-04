
const express = require('express');
const service = express.Router();

const {index, get, update, store, remove} = require('../controllers/serviceController');

//routes for client path

service.get('/service', index );
service.get('/service/:id', get );
service.post('/service', store );
service.put('/service/:id', update );
service.delete('/service/:id', remove );

module.exports = service;





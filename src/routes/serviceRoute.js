
const express = require('express');
const service = express.Router();

const {validateService} = require("../validators/serviceValidation")
const {index, get, update, store, remove} = require('../controllers/serviceController');

//routes for client path

service.get('/services', index );
service.get('/service/:id', get );
service.post('/service',validateService, store );
service.put('/service/:id',validateService, update );
service.delete('/service/:id', remove );

module.exports = service;





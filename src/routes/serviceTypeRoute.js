
const express = require('express');
const serviceType = express.Router();

const{validateServiceType} = require("../validators/serviceTypeValidation")
const {index, get, update, store, remove} = require('../controllers/serviceTypeController');

//routes for client path

serviceType.get('/typesof', index );
serviceType.get('/typeof/:id', get );
serviceType.post('/typeof',validateServiceType, store );
serviceType.put('/typeof/:id',validateServiceType, update );
serviceType.delete('/typeof/:id', remove );

module.exports = serviceType;




const express = require('express');
const serviceType = express.Router();

const {index, get, update, store, remove} = require('../controllers/serviceTypeController');

//routes for client path

serviceType.get('/typeof', index );
serviceType.get('/typeof/:id', get );
serviceType.post('/typeof', store );
serviceType.put('/typeof/:id', update );
serviceType.delete('/typeof/:id', remove );

module.exports = serviceType;



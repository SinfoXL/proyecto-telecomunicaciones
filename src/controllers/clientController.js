
const model = require("../../models/client");

const index = async (req, res) => {

    model.Client.findAll()
    .then( userResponse => {
      res.status( 200 ).json( userResponse )
    })
    .catch( error => {
      res.status( 400 ).send( error )
    })
    const clients = await model.Client.findAll();
    console.log(JSON.stringify(clients, null, 2));
    res.send('hola')
    console.log('index'); 
};

const get = (req, res) => {
    console.log('get');
};

const store = (req, res) => {
    console.log('store');
};

const update = (req, res) => {
    console.log('update');
};

const remove = (req, res) => {
    console.log('remove');
};


module.exports = {index, get, store, update, remove};
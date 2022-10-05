
const {Client} = require("../../models");

const index = async (req, res) => {

    const clientsList = await Client.findAll();
    console.log("All users:", JSON.stringify(clientsList, null, 2));
    res.json(clientsList);
    
};

const get = async (req, res) => {

    const client = await Client.findOne({ where: { id: req.params.id } });  
    res.json(client === null ? 'Not founded' : client);

};

const store = async (req, res) => {
    
    const { email , adress} = req.body ; 
    const client = await Client.create({ email : email, adress: adress });
    res.json(client);

};

const update = async (req, res) => {
    const { email , adress} = req.body ; 
    const client = await Client.update({ email : email, adress: adress }, {
        where : { id_client : req.params.id } 
    });
    res.json(client);
};

const remove = async(req, res) => {
    await Client.destroy({ where: { id_client : req.params.id } });
    res.send(`Cliente con id ${req.params.id} ha sido eliminado`)
};


module.exports = {index, get, store, update, remove};
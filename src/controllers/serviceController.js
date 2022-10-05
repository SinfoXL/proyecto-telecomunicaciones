
const {Service} = require("../../models");

const index = async (req, res) => {

    const servicesList = await Service.findAll();
    console.log("All users:", JSON.stringify(servicesList, null, 2));
    res.json(servicesList);
    
};

const get = async (req, res) => {

    const service = await Service.findOne({ where: { id_service : req.params.id } });  
    res.json(service === null ? 'Not founded' : service);

};

const store = async (req, res) => {
    
    const { name } = req.body ; 
    const client = await Service.create({ name : name });
    res.json(client);

};

const update = async (req, res) => {
    const { name } = req.body ; 
    const service = await Service.update({ name : name }, {
        where : { id_service : req.params.id } 
    });
    res.json(service);
};

const remove = async(req, res) => {
    await Service.destroy({ where: { id_service : req.params.id } });
    res.send(`Cliente con id ${req.params.id} ha sido eliminado`)
};


module.exports = {index, get, store, update, remove};


module.exports = {index, get, store, update, remove};
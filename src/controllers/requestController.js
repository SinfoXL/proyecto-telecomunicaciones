
const {Request} = require("../../models");

const index = async (req, res) => {

    const requestsList = await Request.findAll();
    console.log("All users:", JSON.stringify(requestsList, null, 2));
    res.json(requestsList);
    
};

const get = async (req, res) => {

    const request = await Request.findOne({ where: { id_request : req.params.id } });  
    res.json(request === null ? 'Not founded' : request);

};

const store = async (req, res) => {
    
    const { state, description, platform } = req.body ; 
    const request = await Request.create({ state : state, description : description, platform : platform });
    res.json(request);

};

const update = async (req, res) => {

    const { state, description, platform} = req.body ;
    const request = await Request.update({ state : state, description : description, platform : platform }, {
        where : { id_request : req.params.id } 
    });
    res.json(request);
};

const remove = async(req, res) => {
    await Request.destroy({ where: { id_request : req.params.id } });
    res.send(`Requeste con id ${req.params.id} ha sido eliminado`)
};


module.exports = {index, get, store, update, remove};
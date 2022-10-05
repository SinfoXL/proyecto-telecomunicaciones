
const {TypeService} = require("../../models");
const typeservice = require("../../models/typeservice");

const index = async (req, res) => {

    const typesList = await TypeService.findAll();
    console.log("All users:", JSON.stringify(typesList, null, 2));
    res.json(typesList);
    
};

const get = async (req, res) => {

    const typeService = await TypeService.findOne({ where: { id_typeservice : req.params.id } });  
    res.json(typeService === null ? 'Not founded' : typeService);

};

const store = async (req, res) => {
    
    const { typeservice } = req.body ; 
    const typeOf = await TypeService.create({ typeservice : typeservice });
    res.json(typeOf);

};

const update = async (req, res) => {
    const { typeservice } = req.body ; 
    const typeOf = await TypeService.update({ typeservice : typeservice }, {
        where : { id_typeservice : req.params.id } 
    });
    res.json(typeOf);
};

const remove = async(req, res) => {
    await TypeService.destroy({ where: { id_typeservice : req.params.id } });
    res.send(`Cliente con id ${req.params.id} ha sido eliminado`)
};


module.exports = {index, get, store, update, remove};
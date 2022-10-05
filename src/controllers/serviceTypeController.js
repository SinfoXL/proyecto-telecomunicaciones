
const {TypeService} = require("../../models")

const index = async (req, res) => {

    const serviceTypesList = await TypeService.findAll();
    console.log("All users:", JSON.stringify(serviceTypesList, null, 2));
    res.json(serviceTypesList);

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
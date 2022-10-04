

const index = (req, res) => {
    console.log('index')
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
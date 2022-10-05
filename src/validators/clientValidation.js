
const {check} = require("express-validator");
const {validateResult} = require("../helpers/validateResult");

const validateClient = [

        check('email')
            .exists()
            .not()
            .isEmpty()
            .isEmail(),
        
        (req, res, next) =>{
            validateResult(req, res, next);
        }

];

module.exports = { validateClient }
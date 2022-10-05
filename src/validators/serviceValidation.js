
const {check} = require("express-validator");
const {validateResult} = require("../helpers/validateResult");

const validateService = [
        
        check('name')
            .exists()
            .not()
            .isEmpty(),
        
        (req, res, next) =>{
            validateResult(req, res, next);
        }

];

module.exports = { validateService }

const {check} = require("express-validator");
const {validateResult} = require("../helpers/validateResult");

const validateRequest = [

        check('state')
            .exists()
            .not()
            .isEmpty(),
        
        check('description')
            .exists()
            .not()
            .isEmpty()
            .isString(),
        
        check('platform')
            .exists()
            .not()
            .isEmpty(),

        (req, res, next) => {
            validateResult(req, res, next);
        }

];

module.exports = { validateRequest }
const { check, validationResult } = require('express-validator');
const validations = {
    id: check('id')
        .notEmpty()
        .isNumeric()
        .withMessage('id is invalid'),
    inTime: check('inTime')
            .notEmpty()
            .matches('/^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/')
            .withMessage('date is invalid'),
    outTime: check('outTime')
            .notEmpty()
            .matches('/^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/')
            .withMessage('date is invalid'),
};

const validate = async (req,res,next)=>{
    const errors = validationResult(req)
    if (errors.isEmpty()){
        return next();
    }
    // throw forbidden error
    return res.status(403).json({
        success:false,
        statusCode:403,
        errors: errors,
        responseData:[],
        message:errors.errors[0].msg
    });
}

module.exports = { validations, validate }  
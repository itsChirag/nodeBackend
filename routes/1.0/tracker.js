var express = require('express');
var router = express.Router();
const { get, add, remove } = require('../../controllers/controller.tracking');
const { validations, validate } = require('../../lib/validations/commonValidations');
// return listing 
router.get('/', get );
// save data of tracking
router.post('/', [validations.inTime, validations.outTime],add);
// delete row
router.delete('/', [validations.id], remove);

module.exports = router;

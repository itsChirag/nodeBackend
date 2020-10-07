var express = require('express');
var router = express.Router();
var trakcer = require('./1.0/tracker');
/* GET home page. */
//V1 version 1.0
router.get('/', function(req, res, next) {
  res.json({
    version:"1.0",
    details : "APIs for in/out time tracking"
  });
});
// TODO : middleware
router.use('/1.0/tracking/', trakcer);

module.exports = router;

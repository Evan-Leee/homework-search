var express = require('express');
var router = express.Router();
var datajson = require('../../seeds/data.json');

router.get('/',function(req, res){
  res.send(datajson);
});

module.exports = router;
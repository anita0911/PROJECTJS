const { query } = require('express');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/addName', function(req, res, next) {
const details={model:2022,processor:req.query.processor};
details.name=req.body.name;    
res.render('mobileDetails',{mobileData:details});
});

module.exports = router;
const { query } = require('express');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/mobileDetails', function(req, res, next) {
res.render('mobileDetails',{mobileData:{name:'Realme s3',model:2022,processor:req.query.processor } });
});


router.get('/mobileDetails/:name', function(req, res, next) {
res.render('mobileDetails',{mobileData: {name:'Realme s3',model:2022,type:req.params.name } });
 });
    

module.exports = router;

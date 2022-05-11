const { query } = require('express');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/studentDetail', function(req, res, next) {
res.render('studentDetail',{studentData:{name:'mahadev',age:34,salary:80000,name1:'shakti',age1:33,salary1:90000,name2:'shikha',age2:23,salary2:100000,processor:req.query.processor } });
});


module.exports = router;
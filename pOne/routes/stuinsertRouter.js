const { query } = require('express');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/studentinsert', function(req, res, next) {
const conn = require('../connect');    
conn.connFun().then(async (db) => {
const collection = db.collection('studentdetail');
const insertResult = await collection.insertMany([{ roll: 33 ,name:'raj' , place: 'haryana' ,sub1: 'english',sub2:'hindi',marks1:70,marks2:45 }]);
console.log( insertResult);
res.render('studentinsert',{student:insertResult});

        
    }).catch((e) => {
        console.log(e);
    })   
 
    
});
module.exports = router;
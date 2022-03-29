const { query } = require('express');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.delete('/studentdelete', function(req, res, next) {
const conn = require('../connect');    
conn.connFun().then(async (db) => {
const collection = db.collection('studentdetail');
const deleteResult = await collection.deleteMany({ roll: 11 });
console.log( deleteResult);
res.render('studentdelete',{student:deleteResult});

        
    }).catch((e) => {
        console.log(e);
    })   
 
    
});
module.exports = router;
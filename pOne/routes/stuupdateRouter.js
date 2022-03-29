const { query } = require('express');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.put('/studentupdate', function(req, res, next) {
const conn = require('../connect');    
conn.connFun().then(async (db) => {
const collection = db.collection('studentdetail');
const updateResult = await collection.updateOne({ name: 'sunita' }, { $set: { name: 'pawan' } });
console.log( updateResult);
res.render('studentupdate',{student:updateResult});

        
    }).catch((e) => {
        console.log(e);
    })   
 
    
});
module.exports = router;
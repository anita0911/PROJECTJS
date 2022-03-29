const { query } = require('express');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/studentfetch', function(req, res, next) {
    const conn = require('../connect');    
    conn.connFun().then(async (db) => {
    const collection = db.collection('studentdetail');
    const findResult = await collection.find({}).toArray();
    console.log( findResult);
    res.render('studentfetch',{student:findResult} );
    
                    
    }).catch((e) => {
        console.log(e);
        })   
                     
                        
    });
    
   module.exports = router;
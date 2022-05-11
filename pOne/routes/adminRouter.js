var express = require('express');
const sql = require('mssql');
var router = express.Router();




router.get('/AdminForm',function(req,res,next) {
res.render('Adminpage',{errMsg:'',msg:''});
    });
   
   
    router.post('/AdminDetails',function(req,res,next) {
    res.render('Adminreg');
      });
      
  
      
  module.exports = router;

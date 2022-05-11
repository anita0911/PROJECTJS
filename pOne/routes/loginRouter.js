var express = require('express');
const sql = require('mssql');
var router = express.Router();




router.get('/loginForm',function(req,res,next) {
res.render('loginpage',{errMsg:'',msg:''});
    });
   
   
    router.post('/loginDetails',function(req,res,next) {
    res.render('showregForm');
      });
      
  
      
  module.exports = router;

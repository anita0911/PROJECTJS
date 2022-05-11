var express = require('express');
const sql = require('mssql');
var router = express.Router();
const jwt = require('jsonwebtoken');



/* GET users listing. */
router.get('/Formadmin',function(req,res,next) {
  res.render('Adminreg');
  });


router.post('/adminsubmit',function(req,res,next) {
  const pool = require('../sqlexp');
  pool.getPool().then(async (pool) => {
     let result1 = await pool.request()
    .input('aid',sql.Int,req.body.aid)
    .input('pass',sql.VarChar,req.body.pass)
    .input('name',sql.VarChar,req.body.name)
    .input('age',sql.Int,req.body.age)
    .input('adharno',sql.VarChar,req.body.adharno)
    .input('contact',sql.VarChar,req.body.contact)
    .query('insert into Admin values(@aid,@pass,@name,@age,@adharno,@contact)');
     console.dir(result1)
     res.redirect('/AdminForm');
     }).catch((e) => {
     console.error(e);
  }); 
  
  
});
   
  module.exports = router;

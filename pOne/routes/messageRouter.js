var express = require('express');
const sql = require('mssql');
var router = express.Router();
const jwt = require('jsonwebtoken');



/* GET users listing. */
router.get('/messageForm',function(req,res,next) {
    res.render('messenter');
    });

router.post('/Message',function(req,res,next) {
  const pool = require('../sqlexp');
  pool.getPool().then(async (pool) => {
     let result1 = await pool.request()
    .input('mid',sql.Int,req.body.mid)
    .input('active',sql.VarChar,req.body.active)
    .input('Date',sql.DateTime,req.body.Date)
    .query('insert into Mess values(@mid,@active,@Date)');
     console.dir(result1)
     res.redirect('/Admincontrol');
     }).catch((e) => {
     console.error(e);
  }); 
  
  
});
   
  module.exports = router;

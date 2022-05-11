var express = require('express');
const sql = require('mssql');
var router = express.Router();
const jwt = require('jsonwebtoken');



/* GET users listing. */
router.get('/regForm',function(req,res,next) {
res.render('showregForm');
});


router.post('/RegDetails',function(req,res,next) {
  const pool = require('../sqlexp');
  pool.getPool().then(async (pool) => {
     let result1 = await pool.request()
    .input('uid',sql.Int,req.body.uid)
    .input('name',sql.VarChar,req.body.name)
    .input('password',sql.VarChar,req.body.password)
    .input('gender',sql.VarChar,req.body.gender)
    .input('education',sql.VarChar,req.body.education)
    .input('workexp',sql.VarChar,req.body.workexp)
    .input('age',sql.Int,req.body.age)
    .input('attendanceCount',sql.Int,0)
    .input('lastUpdatedDate',sql.DateTime,req.body.lastUpdatedDate)
    .input('presentDate',sql.DateTime,req.body.presentDate)
    .query('insert into Userlogined values(@uid,@name,@password,@gender,@education,@workexp,@age,@attendanceCount,@lastUpdatedDate,@presentDate)');
     console.dir(result1)
     res.redirect('/loginForm');
     }).catch((e) => {
     console.error(e);
  }); 
  
  
});
   
  module.exports = router;

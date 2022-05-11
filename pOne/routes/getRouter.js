var express = require('express');
const sql=require('mssql');
var router = express.Router();

/* GET users listing. */
router.get('/getRecord',function(req,res,next) {
    const pool = require('../sqlexp');
    pool.getPool().then(async (pool) => {
    let result = await pool.request()
     .query(`select * from Userlogined`);
    console.dir(result)
    res.render('getRecord',{student:result.recordset});
     }).catch((e) => {
     console.error(e);
    }); 
  
});
router.get('/deleteRecord/:id',function(req,res,next) {
    const pool = require('../sqlexp');
    pool.getPool().then(async (pool) => {
    let result = await pool.request()
   .query(`Delete  from Userlogined where uid=${req.params.id}`);
    res.redirect('/getRecord');
     }).catch((e) => {
    console.error(e);
    }); 
  
});
router.get('/getRecordbyid/:id',function(req,res,next) {
    const pool = require('../sqlexp');
    pool.getPool().then(async (pool) => {
    let result = await pool.request()
    .input('uid',sql.Int,req.params.id)
   .query(`select * from Userlogined WHERE uid=@uid`);
   res.render('Editing',{student:result.recordset[0]});
     }).catch((e) => {
    console.error(e);
    }); 
  
});
router.post('/updateRecordbyid',function(req,res,next) {
    const pool = require('../sqlexp');
    pool.getPool().then(async (pool) => {
    let result = await pool.request()
     .input('name',sql.VarChar,req.body.name)
    .input('password',sql.VarChar,req.body.password)
    .input('gender',sql.VarChar,req.body.gender)
    .input('education',sql.VarChar,req.body.education)
    .input('workexp',sql.VarChar,req.body.workexp)
    .input('age',sql.Int,req.body.age)
     .query(`Update Userlogined set name=@name,password=@password,gender=@gender,education=@education,workexp=@workexp,age=@age  WHERE uid=${req.query.id}`);
     res.redirect('getRecord');
     }).catch((e) => {
    console.error(e);
    }); 
  
});

 module.exports = router;

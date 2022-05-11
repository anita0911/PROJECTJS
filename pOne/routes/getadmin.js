var express = require('express');
const sql=require('mssql');
var router = express.Router();

/* GET users listing. */
router.get('/adminRecord',function(req,res,next) {
    const pool = require('../sqlexp');
    pool.getPool().then(async (pool) => {
    let result = await pool.request()
     .query(`select * from Admin`);
    console.dir(result)
    res.render('adminRecord',{student:result.recordset});
     }).catch((e) => {
     console.error(e);
    }); 
  
});
router.get('/deleteadmin/:id',function(req,res,next) {
    const pool = require('../sqlexp');
    pool.getPool().then(async (pool) => {
    let result = await pool.request()
   .query(`Delete  from Admin where aid=${req.params.id}`);
    res.redirect('/adminRecord');
     }).catch((e) => {
    console.error(e);
    }); 
  
});
router.get('/adminRecordbyid/:id',function(req,res,next) {
    const pool = require('../sqlexp');
    pool.getPool().then(async (pool) => {
    let result = await pool.request()
    .input('aid',sql.Int,req.params.id)
   .query(`select * from Admin WHERE aid=@aid`);
   res.render('editadmin',{student:result.recordset[0]});
     }).catch((e) => {
    console.error(e);
    }); 
  
});
router.post('/updateadminbyid',function(req,res,next) {
    const pool = require('../sqlexp');
    pool.getPool().then(async (pool) => {
    let result = await pool.request()
     .input('pass',sql.VarChar,req.body.pass)
    .input('name',sql.VarChar,req.body.name)
    .input('age',sql.Int,req.body.age)
    .input('adharno',sql.VarChar,req.body.adharno)
    .input('contact',sql.VarChar,req.body.contact)
    .query(`Update Admin set pass=@pass,name=@name,age=@age,adharno=@adharno,contact=@contact  WHERE aid=${req.query.id}`);
     res.redirect('/adminRecord');
     }).catch((e) => {
    console.error(e);
    }); 
  
});

 module.exports = router;

var express = require('express');
const sql=require('mssql');
var router = express.Router();

/* GET users listing. */
router.get('/messagerecord',function(req,res,next) {
    const pool = require('../sqlexp');
    pool.getPool().then(async (pool) => {
    let result = await pool.request()
     .query(`select * from Mess`);
    console.dir(result)
    res.render('messagerecord',{student:result.recordset});
     }).catch((e) => {
     console.error(e);
    }); 
  
});
router.get('/deletemessage/:id',function(req,res,next) {
    const pool = require('../sqlexp');
    pool.getPool().then(async (pool) => {
    let result = await pool.request()
   .query(`Delete  from Mess where mid=${req.params.id}`);
    res.redirect('/messagerecord');
     }).catch((e) => {
    console.error(e);
    }); 
  
});
router.get('/messageRecordbyid/:id',function(req,res,next) {
    const pool = require('../sqlexp');
    pool.getPool().then(async (pool) => {
    let result = await pool.request()
    .input('mid',sql.Int,req.params.id)
   .query(`select * from Mess WHERE mid=@mid`);
   res.render('editmessage',{student:result.recordset[0]});
     }).catch((e) => {
    console.error(e);
    }); 
  
});
router.post('/updatemessagebyid',function(req,res,next) {
    const pool = require('../sqlexp');
    pool.getPool().then(async (pool) => {
    let result = await pool.request()
     .input('active',sql.VarChar,req.body.active)
    .input('Date',sql.DateTime,req.body.Date)
   .query(`Update Mess set active=@active,Date=@Date  WHERE mid=${req.query.id}`);
     res.redirect('/messagerecord');
     }).catch((e) => {
    console.error(e);
    }); 
  
});

 module.exports = router;

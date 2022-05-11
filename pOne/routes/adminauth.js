var express = require('express');
const sql = require('mssql');
var router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/authe',function(req,res,next) {
    const privateKey = '!@#DFTbnhu*';
     const pool = require('../sqlexp');
     if (req.body.aid  && req.body.pass) {
      pool.getPool().then(async (pool) => {
      let result = await pool.request()
     .input('aid', req.body.aid)
     .input('pass', req.body.pass)
      .query('SELECT * FROM Admin WHERE aid = @aid AND pass=@pass');
      if (result.recordset.length) {
      try {
      const token = jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'HS256' }); 
     const info = {
       username: result.recordset[0].aid,
      code: token,
      role: 'Admin'
      }
      res.cookie('info', info);
      res.redirect('/Admincontrol')
      }catch(err) {
      res.render('Adminpage', { errMsg: err});
      }
   
      } else {
      res.render('Adminpage', { errMsg: 'Record not found or invalid user name password'});
      }
      }).catch((e) => {
       console.error(e);
           })
       } else {
           res.render('Adminpage', { errMsg: 'Enter aid and password'});
       }
   });

   router.get('/Admincontrol',function(req,res,next) {
    res.render('Admincontrol',{msg:''});
        });
       
   
   module.exports = router;
 
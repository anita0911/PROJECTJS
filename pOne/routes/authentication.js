var express = require('express');
const sql = require('mssql');
var router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/auth',function(req,res,next) {
    const privateKey = '!@#DFTbnhu*';
     const pool = require('../sqlexp');
     if (req.body.uid  && req.body.password) {
      pool.getPool().then(async (pool) => {
      let result = await pool.request()
     .input('uid', req.body.uid)
     .input('password', req.body.password)
      .query('SELECT * FROM Userlogined WHERE uid = @uid AND password=@password');
      if (result.recordset.length) {
      try {
      const token = jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'HS256' }); 
     const info = {
       username: result.recordset[0].uid,
      code: token,
      role: 'Userlogined'
      }
      res.cookie('info', info);
      res.redirect('/welcome')
      }catch(err) {
      res.render('loginpage', { errMsg: err});
      }
   
      } else {
      res.render('loginpage', { errMsg: 'Record not found or invalid user name password'});
      }
      }).catch((e) => {
       console.error(e);
           })
       } else {
           res.render('loginpage', { errMsg: 'Enter uid and password'});
       }
   });

   router.get('/welcome',function(req,res,next) {
    res.render('welcome',{msg:''});
        });
       
   
   module.exports = router;
 
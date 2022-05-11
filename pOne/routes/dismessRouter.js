var express = require('express');
const sql=require('mssql');
var router = express.Router();
const jwt = require('jsonwebtoken');


/* GET users listing. */
router.get('/Display',function(req,res,next) {
const pool = require('../sqlexp');
pool.getPool().then(async (pool) => {
let result = await pool.request()
.query(`select * from Mess `);
console.dir(result)
res.render('welcome',{student:result.recordset});
 }).catch((e) => {
 console.error(e);
 }); 
  
});
 module.exports = router;
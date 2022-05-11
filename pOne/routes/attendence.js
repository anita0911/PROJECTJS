var express = require('express');
const sql = require('mssql');
var router = express.Router();
const jwt = require('jsonwebtoken');
const verifyJwtAuth = require('../utils/authorization');
const moment = require('moment');


router.get('/updateAttendence', function (req, res, next) {
    try {
        verifyJwtAuth(req.cookies.info.code).then((result) => {
        if (result === 'Verified Successfully') {
        const uid = req.cookies.info.username;
        const pool = require('../sqlexp');
        pool.getPool().then(async (pool) => {
        let response = await pool.request()
        .input('uid', sql.Int, uid)
       .query(`select * from Userlogined WHERE uid=@uid`);
       if (response.recordset.length) {
        const data = response.recordset[0];
        const attendanceCount = (data.attendanceCount) + 1;
        const dateTimeFormatUpdate = 'YYYY-MM-DD HH:mm:ss';
        const lastUpdatedDate = moment().format(dateTimeFormatUpdate);
        const presentDate = moment().format(dateTimeFormatUpdate);
        if (data.lastUpdatedDate) {
        const lastDate = moment(data.lastUpdatedDate).format('yyyy-MM-DD')
        const todayDate = moment().format('yyyy-MM-DD')
        if (moment(lastDate).isBefore(todayDate, 'day') && !moment(lastDate).isSame(todayDate, 'day')) {
        const updateRecord =await pool.request()
        .input('uid', sql.Int, uid)
        .input('attendanceCount', sql.Int, attendanceCount)
        .input('lastUpdatedDate', sql.DateTime, lastUpdatedDate)
        .input('presentDate', sql.DateTime, presentDate)
        .query(` update Userlogined set attendanceCount=@attendanceCount, lastUpdatedDate=@lastUpdatedDate,presentDate=@presentDate where uid=@uid`);
        console.log(updateRecord,'++++++++++++++');
         res.render('welcome',{ msg: 'success' })
        } else {
                                
//res.send('<h3>already updated!</h3>')
//res.render('homePage', {Msg: '<h3>Attendence Already Updated</h3>' });
 res.render('welcome', { msg: 'failure' })
 }
     }
 else {
const updateRecord = await pool.request()
.input('uid', sql.Int, uid)
.input('attendanceCount', sql.Int, attendanceCount)
.input('lastUpdatedDate', sql.DateTime, lastUpdatedDate)
.input('presentDate', sql.DateTime, presentDate)
.query(`update Userlogined set attendanceCount=@attendanceCount, lastUpdatedDate=@lastUpdatedDate , presentDate=@presentDate where uid=@uid`);
res.render('welcome', { msg: 'success' });
 }
    }

 else {
     res.render('welcome', { msg: 'failure' })

}
     }
    ).catch((e) => {
     console.error(e);
     })
            } else {
                res.send('<h3>login please!</h3>')
            }
        })
    } catch (err) {
        console.log('incorrect token!');
        res.send('<h3>login please!</h3>')
    }

});


module.exports = router;

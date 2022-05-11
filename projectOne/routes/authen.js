var express = require('express');
var router = express.Router();
const conn = require('../Mconnect');


router.post('/authe', function (req, res, next) {
    const privateKey = '!@#DFTbnhu*';
    if (req.body.bid && req.body.password) {
        conn.connFun().then(async (db) => {
            const collection = db.collection('Banklogin');
            const findResult = await collection.find({}).toArray();
            console.log('Found documents=>', findResult.length);
            console.log('Found documents=>', findResult);
            
        }).catch((e) => {
            console.error(e);
        })
    } else {
        res.render('Banklogin', { errMsg: 'Enter bid and password' });
    }
});


router.get('/welcome', function (req, res, next) {
    res.render('welcome', { msg: '' });
});


module.exports = router;

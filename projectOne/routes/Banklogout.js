var express = require('express');
var router = express.Router();


router.get('/logout',function(req,res,next) {
    res.clearCookie('jwtToken')
    res.redirect('/BankForm');
  });
 
  module.exports = router;
var express = require('express');
var router = express.Router();
const connection = require('../utils/authorization');
const conn = require('../Mconnect');
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const nodemailer = require("nodemailer");
const { parse } = require('json2csv');
var smtpTransport = require('nodemailer-smtp-transport');


router.post('/checkmail', function (req, res, next) {
  const { Description, Deposits } = req.body;
  console.log(Description, Deposits);
  conn.connFun().then(async (db) => {
    console.log('start');

    const datesObj = new Date();
    // const b = datesObj.toISOString();
    console.log('start');
    const collection = db.collection('Transaction');
    const count = await db.collection('Transaction').countDocuments();
    console.log(count, 'this is the count of data')
    const batch = 300;
    const batchCount = Math.round(count / batch);
    console.log(batchCount);
    // fs.writeFileSync('result.csv')
    let csvArray = [];
    for (let num = 0; num < batchCount; num++) {
      console.log('for loop started');
      const findResult = await collection.find({ Description: Description }, { Deposits: parseInt.Deposits }).limit(batchCount).skip((num * batchCount)).toArray();
      //const csv = parse(findResult, ["_id", "Date", "Description", "Deposits", "Withdrawls", "Balance"]);
      if (findResult.length === 0) {
        console.log('No record found')
      } else {
        var csv = parse(findResult, ["_id", "Date", "Description", "Deposits", "Withdrawls", "Balance"]);
        fs.appendFile('result.csv', csv, function (err) {
          if (err) throw err;
          console.log('The "data to append" was appended to file!');
        });
      
      }
      // console.log(findResult);
      // csvArray.push(findResult);
      
    }




    // var findResult = await collection.find({ Description: Description }, { Deposits: Deposits }).toArray().then((result) => {
    //   console.log(result)
    // if (findResult.length ===0) {
    //   res.send('no records found!')
    //   console.log(result, "result")
    // }

    // else {

    //fs.writeFileSync('result.csv', csv)
    // console.log(csv,"csv")
    var transporter = nodemailer.createTransport({
      service: "hotmail",
      port: 587,
      auth: {
        user: "anitaotaon99@outlook.com",
        pass: "makali1008",
      },
    });

    transporter.sendMail(
      {
        from: "anitaoraon99@outlook.com",
        to: "anitaoraon99@outlook.com",
        subject: "**IMPORTANT**RECORD**",
        text: "Please check the attachment for your reference! ",
        html: "<b>You asked for some Bank Details, There is a file containing all Details </b>",

        attachments: [
          {
            filename: "result.csv",
            content: csv

          },
        ],
      },
      (err, info) => {
        if (err) {
          console.log("Error occurred. " + err.message);
          return process.exit(1);
        }
        console.log("Message sent to you Email: %s", info.messageId);
        // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        //res.send("Message sent: %s", info.messageId);
      }
    );
    res.send("<h2>Message sent to your Email:</h2>");


    //}



  }).catch((error) => {
    console.log(error);
  })

})
 
module.exports = router;
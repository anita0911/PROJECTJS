
const express = require('express');
const bodyParser=require(`body-parser`);
const app = express();

const port = 3000;



app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post('/insert',(req,res)=> {
const conn = require('./moexpcon1');    
conn.connFun().then(async (db) => {
const collection = db.collection('studentdetail');
const insertResult = await collection.insertMany([{ roll: 10 ,name:'mamta' , place: 'rajasthan' ,sub1: 'kurukh',sub2:'santhali',marks1:56,marks2:45 }]);
console.log('Inserted documents =>', insertResult);
res.send({status:200,message:'inserted successfully',student:insertResult});

        
    }).catch((e) => {
        console.log(e);
    })   
 
    
});

    app.post('/delete',(req,res)=> {
    const conn = require('./moexpcon1');    
    conn.connFun().then(async (db) => {
    const collection = db.collection('studentdetail');
    const deleteResult = await collection.deleteMany({ roll: 4 });
    console.log('Deleted documents =>', deleteResult);
    res.send({status:200,message:'deleted successfully',student:deleteResult});
    
            
    }).catch((e) => {
    console.log(e);
    })   
     
        
    });
    app.post('/update',(req,res)=> {
    const conn = require('./moexpcon1');    
    conn.connFun().then(async (db) => {
    const collection = db.collection('studentdetail');
    const updateResult = await collection.updateOne({ name: 'mamta' }, { $set: { name: 'meera' } });
    console.log('Updated documents =>', updateResult);
    res.send({status:200,message:'updated successfully',student:updateResult});
        
                
     }).catch((e) => {
     console.log(e);
     })   
         
            
        });
    app.post('/index',(req,res)=> {
    const conn = require('./moexpcon1');    
    conn.connFun().then(async (db) => {
    const collection = db.collection('studentdetail');
    const indexName = await collection.createIndex({ roll: 1 });
    console.log('index name =', indexName);
    res.send({status:200,message:'index successfully',student:indexName});
                
                        
    }).catch((e) => {
    console.log(e);
    })   
                 
                    
    });
    app.post('/finddocuments',(req,res)=> {
    const conn = require('./moexpcon1');    
    conn.connFun().then(async (db) => {
    const collection = db.collection('studentdetail');
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);
    res.send({status:200,message:'found successfully',student:findResult});
                    
                            
        }).catch((e) => {
        console.log(e);
        })   
                     
                        
        });
        
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
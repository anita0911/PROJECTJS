const sql = require('mssql');

const sqlConfig = {
    user: 'root',
    password: 'root',
    database: 'SHAKTI',
    server: 'USER',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
}

const connectFun = async () => {
 try {
  // make sure that any items are correctly URL encoded in the connection string
  await sql.connect(sqlConfig)
  //const result=await sql.query('create table book1(pid int,name varchar,price int,issueno int)')
  //const result1=await sql.query('create table lakme(proid int primary key,volume int,price int,proqua VarChar(30))')
  //const result2=await sql.query('create table people(orderid int primary key,volume int,price int,proid int foreign key references lakme(proid))')
 const result2=await sql.query('select  lakme left join people on lakme.proid=people.proid')
  console.dir(result2)
 } catch (err) {
  // ... error checks
  console.log(err);
 }
}
  connectFun();     

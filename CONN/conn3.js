const mssql = require('mssql/promise');
const pool= mssql.createPool;
({
    user: 'root',
    password: 'root',
    database: 'employee',
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
});


pool.query=("Insert into empdetails(pid,fname,lname,age,adress,salary,gender,status),values(5,'sheetal','kumari',38,'punjab',10,000,'female','married')",(err,res)=>{
console.log(err,res);
pool.end();
});




   
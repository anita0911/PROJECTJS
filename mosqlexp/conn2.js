const sql = require('mssql');
const pool = require('./exportses');

//pool.getPool().then(async (pool) => {
   // let result1 = await pool.request()
  //  .input('pid',sql.Int, 7)
 //   .input('name',sql.VarChar,'m')
 //   .input('price',sql.Int, 800)
  //  .input('issueno',sql.Int,29)
  //  .query('insert into book1 values(@pid,@name,@price,@issueno)')
    
   // console.dir(result1)
    //}).catch((e) => {
 //   console.error(e);
 //});

//pool.getPool().then(async (pool) => {
  //  let result1 = await pool.request()
 //   .input('pid',sql.Int, 6)
  //  .query('update  book1 set price=900 where pid=@pid')
    
  //  console.dir(result1)
  //}).catch((e) => {
  //  console.error(e);
    //});

//pool.getPool().then(async (pool) => {
 //  let result1 = await pool.request()
  // .input('pid',sql.Int, 4)
   // .query('delete from  book1   where pid=@pid')
    
 //  console.dir(result1)
  //}).catch((e) => {
  // console.error(e);
  //  });

   // pool.getPool().then(async (pool) => {
  // let result1 = await pool.request()
   //.input('proid',sql.Int,6)
  // .input('volume',sql.Int,'90')
  // .input('price',sql.Int, 500)
  //  .input('proqua',sql.VarChar,'average')
  // .query('insert into lakme values(@proid,@volume,@price,@proqua)')
    
  //  console.dir(result1)
  //}).catch((e) => {
  // console.error(e);
 //});
pool.getPool().then(async (pool) => {
  let result1 = await pool.request()
   .input('orderid',sql.Int,4)
   .input('volume',sql.Int,'98')
   .input('price',sql.Int, 250)
    .input('proid',sql.Int,4)
   .query('insert into people values(@orderid,@volume,@price,@proid)')
    
    console.dir(result1)
  }).catch((e) => {
   console.error(e);
 });




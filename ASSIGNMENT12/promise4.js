const promiseobj1=new Promise((resolve,reject)=>
{
    let req=true
    if(req==true)
    {
        resolve([1,2,3,4,5])
    }
    else
    {
        reject('request rejected')
    }
});
promiseobj1.then((message)=>
{
    console.log('this is in then'+ message);
}).catch((message)=>
{
    console.log('this is in the catch'+message)
})


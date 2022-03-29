let p=new Promise((resolve,reject)=>
{
    let a=4+1;
    if(a==5)
    {
        resolve('success');
    }
    else
    {
        reject('failed');
    }
})
p.then((message)=>
{
 console.log('this is in the then'+ message)
}).catch((message)=>
{
    console.log('this is in the catch'+ message);
})













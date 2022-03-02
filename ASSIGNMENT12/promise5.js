const promiseobj2=new Promise((resolve,reject)=>
{
    let marks=90
    if(marks==90)
    {
        resolve("keep going")
    }
    else
    {
        reject('request rejected')
    }
});
promiseobj2.then((message)=>
{
    console.log('you are working hard'+ message);
}).catch((message)=>
{
    console.log('not working hard'+message)
})


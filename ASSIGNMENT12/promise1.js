let taskcompleted=true;
let prom=new Promise(function(resolve,reject)
{
    if(taskcompleted)
    {
        resolve('great work');
    }
    else
    {
          reject('need to work hard');
    }
});

console.log(prom);



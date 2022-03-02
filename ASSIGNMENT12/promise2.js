function prom(complete)
{
    return new Promise(function(resolve,reject)
    
    {
        if(complete)
        {
            resolve('iam succesful')
        }
        else
        {
            reject('iam failed')
        }
    })
}
let onfulfilement=(result)=>
{
    console.log(result);
}
let onRejection=(error)=>
{
    console.log(error);
}

 prom(true).then(onfulfilement);
 prom(true).catch(onRejection);   
    
    
    
    

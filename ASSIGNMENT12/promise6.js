let passGraduation=function()

{
    return new Promise(function(resolve,reject)
    {
        resolve('first passGraduation');
    });
}
let crackInterview=function()
{
    return new Promise(function(resolve,reject)
{

resolve('crack interview');
})
}
let getjob=function()
{
    return new Promise(function(resolve,reject)
{
    resolve('get job');
})
}
passGraduation().then(function(result)
{
    return 'crack Interview(result)';
}).then (function(result)
{
    return getjob(result);
}).then (function(result)
    {
        console.log('finished'+result);
    })





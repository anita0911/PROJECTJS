function sum(...args)
{
    let total=0;
    for(let i in args)
    {
        total+=args[i];
    }
    return total;
}
console.log(sum(10,20,30,40));
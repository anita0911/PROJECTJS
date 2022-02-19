const evenodd=(num)=>
{
    if(num%2===0)
    {
        return'even';
    }
    else
    {
        return 'odd';
    }
}
const result=evenodd(56);
console.log(`Given number is:${result}`);
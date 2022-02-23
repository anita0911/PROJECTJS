let displaycolours=function(message,...colours)
{
    console.log(message);
    for(let i in colours)
    {
        console.log(colours[i]);
    }
}
let message="list of colours";
displaycolours(message,'red');
displaycolours(message,'red','blue');
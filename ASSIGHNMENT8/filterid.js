const order=[

{
    userid:1,
    amount:10
},
{
    userid:1,
    amount:15
}

];
const a=order.filter(order=>order.userid===1)
.map(order=>order.amount);
console.log(a);
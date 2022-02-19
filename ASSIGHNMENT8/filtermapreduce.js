const arr=[1,2,3,4,5,6,7];
const newArr=arr
.filter(a=>a%2===0)
.map(a=>a*a)
.reduce((a,b)=>a+b);
console.log(newArr);
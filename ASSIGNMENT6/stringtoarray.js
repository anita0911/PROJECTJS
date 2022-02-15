const namearray=[1,12,'atom','hello',3,4,11,10];
const stringarray=[];
const numberarray=[];
namearray.forEach(element => {
    if(typeof(element)=="string")
    {
        stringarray.push(element);
    }
    if(typeof(element)=="number")
    {
        numberarray.push(element);
    }
});
console.log(stringarray);
console.log(numberarray);
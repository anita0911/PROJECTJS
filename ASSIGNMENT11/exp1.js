const namearray=[1,12,'atom','hello',3,4,11,10];
const stringarray=[];
const numberarray=[];
const loopfunction=()=>{
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
}
loopfunction();
exports.stringarray=stringarray;
exports.numberarray=numberarray;
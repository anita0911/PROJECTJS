let arr2=[30,35,80,2,45,90];
let min=arr2[0];
for(let i=0;i<arr2.length;i++)
{
    if(arr2[i]<=min)
    {
        min=arr2[i];
    }
}
console.log(min);
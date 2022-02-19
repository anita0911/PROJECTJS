let arr1=[29,30,55,65,78];
let max=arr1[0];
for(let i=0;i<arr1.length;i++)
{
    if(arr1[i]>=max)
    {
        max=arr1[i];
    }
}
console.log(max);
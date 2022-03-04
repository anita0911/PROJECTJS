try
{
  console.log('start of try program');
  getout;
  console.log('end of try program');
}
catch(error)
{
    console.log('error has accured:'+ error.message);
}
finally
{
    console.log('this is always run');
}
console.log('then the execution continues');
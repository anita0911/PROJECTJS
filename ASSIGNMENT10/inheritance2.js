class Father
{
  showFMoney()
  {
      return " Father Money";
  }
}
class Son extends Father
{
    showSMoney()
    {
        return " Son Money";
    }

    
}
const s=new Son();
console.log(s.showFMoney());
console.log(s.showSMoney());
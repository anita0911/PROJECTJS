class Father
{
   showFMoney()
   {
       return "Father Money";
   }
}
class Son extends Father
{
    showSMoney()
    {
         return "Son Money";
    }
}
class Grandson extends Son
{
    showGMoney()
    {
    return "Grandson Money";
    }
}
const g=new Grandson();
console.log(g.showFMoney());
console.log(g.showSMoney());
console.log(g.showGMoney());
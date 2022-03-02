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
module.exports = Grandson;

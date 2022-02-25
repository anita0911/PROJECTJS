class Father
{
    constructor(money)
    {
        this.Fmoney=money;
    }
    showFmoney()
    {
       return this.Fmoney;
    }
}
class Son extends Father
{
    constructor(money)
    {
        super(money);

    }
    showSmoney()
    {
        return "Son Money";
    }
}
 let s=new Son(1000);
 console.log(s.showFmoney());
 console.log(s.showSmoney());


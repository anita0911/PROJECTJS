class Students
{
    constructor(name,age,cls)
    {
        this.myname=name;
        this.myage=age;
        this.mycls=cls;
    }
    biodata()
    {
        console.log(`hi my name is:${this.myname}.iam ${this.myage}years old and iam in class${this.mycls}`);
    }
}
class player extends Students
{
    constructor(name,age,cls,game)
    {
        super(name,age,cls);
        this.mygame=game;
    }
}
let obj1=new player('rekha',32,'MCS','football');
obj1.biodata();
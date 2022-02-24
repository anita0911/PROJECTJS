class User
{
    constructor(username,email,password)
    {
       this.username=username;
       this.email   =email;
       this.password=password;
    }
    register()
    {
        console.log(this.username+" ",'is now registered');
    }
}
class Member extends User
{
    constructor(username,email,password,memberpakage)
    {
        super(username,email,password);
        this.package=memberpakage;
    }
    getpackage()
    {
        console.log(this.username+" ",'is subscribed to the package');
    }
}
let mug=new Member('anita','anitaoraon99@gmail.com','123','standard');
mug.getpackage();
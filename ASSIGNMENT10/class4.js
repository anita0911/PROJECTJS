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
let put=new User('Rani','rani@gmail.com',12345);
put.register();
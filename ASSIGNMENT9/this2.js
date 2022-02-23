const person={
    name:"shikha rani",
    email:"rinky009@gmail.com",
    dob  :"01/01/2000",
    proffession:"software developer",
    desc:function()
    {
         console.log("the person name is:"+this.name+" "+" person profession is:"+this.proffession);
    }
}
person.desc();
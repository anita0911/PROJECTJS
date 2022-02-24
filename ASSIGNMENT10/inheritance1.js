class Employee
{
constructor(name)
  {
    console.log("constructor:Employee"+name);
  }
}
class Manager extends Employee
{
    constructor(name)
    {
        super();
        console.log("constructor:Manager"+name);
    }
}
let a=new Manager("Anita Oraon");
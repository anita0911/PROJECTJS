class Employee{
    constructor(id,name)
    {
        this.id=id;
        this.name=name;

    }
    display()
    {
        console.log(this.id+" "+this.name);
    }
}
const e1=new Employee(101,"prince");
const e2=new Employee(102,"Nihal");
e1.display();
e2.display();
const student={
    fname:"shivani",
    lname:"kumari",
    roll: 1,
    name:function()
    {
        return `name is ${this.fname}${this.lname}`
    }
}
console.log(student.name());
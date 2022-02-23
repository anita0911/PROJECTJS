const school={
    class1no:78,
    class2no:45,
    class3no: 34,
    av:function()
    {
        return this.class1no+this.class2no;
    }
}
console.log(school.av());
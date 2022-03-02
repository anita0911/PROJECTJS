class Classengg {
    constructor(name,branch, semester, subject, year, result)
    {
        this.name   =name;
        this.branch = branch ;
        this.semester = semester;
        this.subject = subject;
        this.year = year ;
        this.result = result ;

    }
    getBranch () {
        return `${this.name} ${this.branch} is from semester ${this.semester} persuing subject ${this.subject}  passesd in the year ${this.year} and the grade is ${this.result}`;
    }

}
const myClassengg = new Classengg ("","mechanical branch","third", "som", "2014","pass");

console.log(myClassengg.getBranch());

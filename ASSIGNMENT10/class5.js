class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    
    getAddress () {
        return `${this.name} is from city ${this.city}`;
    }
}

const personOne = new Person('radha', 31, 'vrindavan');
const personTwo = new Person('Shyam', 21, 'dwarka');

console.log(personOne.name);
console.log(personTwo.getAddress());

personOne.pincode = 230067;
console.log(personOne);
console.log(personTwo);

delete personOne.name;
console.log(personOne);
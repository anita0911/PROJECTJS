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
module.exports = Person;


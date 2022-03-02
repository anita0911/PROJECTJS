class Person {
    name = 'Ramesh';
    city = 'Ranchi';

    getAddress () {
        return `${this.name} is from city ${this.city}`;
    }
}
module.exports = Person;


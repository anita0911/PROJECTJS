const Personobj9 = require('./expobj9');
const personOneobj9 = new Personobj9('radha', 31, 'vrindavan');
const personTwoobj9 = new Personobj9('Shyam', 21, 'dwarka');

console.log(personOneobj9.name);
console.log(personTwoobj9.getAddress());

personOneobj9.pincode = 230067;
console.log(personOneobj9);
console.log(personTwoobj9);

delete personOneobj9.name;
console.log(personOneobj9);
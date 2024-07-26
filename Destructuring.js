let name = ['John', 'Doe','Smith', 'Jr.','III'];
let [firstName, secondName, lastName, ...others] = name;
console.log(firstName); 
console.log(secondName); 
console.log(lastName);
console.log(others);


const person = {
    Name: 'John Doe',
    age: 32,
    Class: 10,
    school: 'St. Thomas',
    city: 'New York',
    state: 'NY',
    country: 'USA'
};
const {Name, age, Class, ...address} = person;
console.log(Name);
console.log(age);
console.log(address);
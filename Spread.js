let arr = [1,2,3,4,5,6,7,8,9]

console.log(Math.max(...arr))
console.log(Math.min(...arr))

// Spread operator can be used to merge two arrays
let arr1 = [1,2,3]
let arr2 = [4,5,6]
let arr3 = [...arr1, ...arr2]
console.log(arr3)

// Spread operator can be used to copy an array
let arr4 = [...arr1]
console.log(arr4)
console.log(arr1 === arr4)

// Spread operator can be used to copy an object
let obj1 = {name: 'John', age: 25}
let obj2 = {...obj1}
console.log(obj2)
console.log(obj1 === obj2)
obj2.name = 'Jane'
console.log(obj1)
console.log(obj2)

// Spread operator can be used to merge two objects
let obj3 = {name: 'John', age: 25}
let obj4 = {city: 'New York', country: 'USA'}
let obj5 = {...obj3, ...obj4}
console.log(obj5)

// Spread operator can be used to copy an object and add new properties
let obj6 = {name: 'John', age: 25}
let obj7 = {...obj6, city: 'New York', country: 'USA'}
console.log(obj7)

// Spread operator can be used to copy an object and update existing properties
let obj8 = {name: 'John', age: 25}
let obj9 = {...obj8, name: 'Jane'}
console.log(obj9)

// Spread can be used iterate over a string
let str = 'Hello'
console.log([...str])

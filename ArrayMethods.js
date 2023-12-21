// Array length
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;

// Array toString()
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits1.toString();

//Array pop()
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.pop();

//Array push()
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
fruits4.push("Kiwi");

//Array shift()
const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
fruits5.shift();

//Array unshift()
const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
fruits6.unshift("Lemon");

//Array delete()
const fruits7 = ["Banana", "Orange", "Apple", "Mango"];
delete fruits7[0];

//Merging (Concatenating) Arrays
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren1 = arr1.concat(arr2, arr3);

//Flattening an Array
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();

//.indexOf()
let primary = ["red","blue","green"];
primary.indexOf("red");  //1
primary.indexOf("yellow");   //-1
primary.indexOf("Blue");    //-1

//.includes()
let primary1 = ["red","blue","green"];
primary.includes("red");   // true
primary.includes("yellow");    //flase

//.splice()
const fruits8 = ["Banana", "Orange", "Apple", "Mango"];
fruits8.splice(2, 0, "Lemon", "Kiwi");


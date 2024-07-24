// reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

// Syntax
// arr.reduce(callback( accumulator, element )); 
// accumulator is the initial value, or the previously returned value of the function (optional) 

// Example 1
console.log([1,2,3,4,5,6,7,8,9,10].reduce((acc, val) => acc + val));

// Example 2
console.log([1,2,3,4,5,6,7,8,9,10].reduce((acc, val) => acc + val, 100));

// Example 3
let arr = [1,2,3,4,5,6,7,8,9,10];
let sum = arr.reduce((acc, val) => acc + val);
console.log(sum);

// Example 4 (Finding the maximum value in an array)
let arrr = [1,2,3,4,5,6,7,8,9];
let max= arrr.reduce((acc,el) => {
    if (acc < el) {
        return el;
    }else{
        return acc;
    }
});
console.log(max)
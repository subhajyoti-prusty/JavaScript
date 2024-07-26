let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function sum (...arr){
    return arr.reduce((acc, val) => acc + val, 0);
}
console.log(sum(...arr));


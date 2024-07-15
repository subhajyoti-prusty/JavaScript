console.log('Start of script');

setInterval(() => {
    console.log('Inside setInterval');
}, 2000);

console.log('End of script');


let id = setInterval(() => {
    console.log('Print');
}, 2000);
console.log(id);

clearInterval(id);
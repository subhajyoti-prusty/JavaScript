const Calculator = {
    add: function(a, b) {
        return a + b;
    },
    sub: function(a, b) {
        return a - b;
    },
    mul: function(a, b) {
        return a * b;
    },
    div: function(a, b) {
        return a / b;
    }
}

console.log(Calculator.add(5, 5));
console.log(Calculator.sub(5, 5));
console.log(Calculator.mul(5, 5));
console.log(Calculator.div(5, 5));


//Shorthand method 

const Calculator1 = {
    add(a, b) {
        return a + b;
    },
    sub(a, b) {
        return a - b;
    },
    mul(a, b) {
        return a * b;
    },
    div(a, b) {
        return a / b;
    }
}

console.log(Calculator1.add(5, 5));
console.log(Calculator1.sub(5, 5));
console.log(Calculator1.mul(5, 5));
console.log(Calculator1.div(5, 5));

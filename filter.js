let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let even = num.filter (function (element) {
    return element % 2 == 0;
}
);
console.log (even);

let odd = num.filter ((element) => {
    return element % 2 != 0;
}
);
console.log (odd);
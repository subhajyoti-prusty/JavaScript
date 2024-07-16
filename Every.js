console.log(
  [1, 2, 3, 4, 5].every((el) => {
    return el % 2 == 0;
  })
);

console.log([1, 3, 5, 7].every((el) => el % 2 !== 0));

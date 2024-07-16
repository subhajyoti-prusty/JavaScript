console.log(
    [1, 2, 3, 4, 5].some((el) => {
      return el % 2 == 0;
    })
  );
  
  console.log([1, 3, 5, 7].some((el) => el % 2 == 0));

  console.log([2, 4, 6, 8].some((el) => el % 2 == 0));
  
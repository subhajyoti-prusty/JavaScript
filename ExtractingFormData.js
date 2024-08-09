let form = document.querySelector("form");

// form.addEventListener("Submit", function(event){
//     event.preventDefult();

//     let inp = document.quarySelector("input");
//     console.log(inp.value);

// });

form.addEventListener("submit", function (event) {
  event.preventDefault();

  //   let user = document.querySelector("#user");
  //   let pass = document.querySelector("#pass");

  //   console.log(user.value);
  //   console.log(pass.value);

  //   alert(`Hi ${user.value}, your password is ${pass.value}`);

  // Anothe way to get data
  console.dir(form);
  let user = this.elements[0];
  let pass = this.elements[1];

  console.log(user.value);
  console.log(pass.value);

  alert(`Hi ${user.value}, your password is ${pass.value}`);
});

const student = {
  name: "John",
  mark: 80,
  prop: this,

  //Normal Function this is called by the object
  //Output : { name: 'John', mark: 80, prop: {} }
  getName: function () {
    console.log(this);
    return this.name;
  },

  //Arrow Function this is called by the parent object
  //Output : {} undefined
  getMark: () => {
    console.log(this);
    return this.mark;
  },

//Normal Function but used arrow function inside setTimeout
//Output : { name: 'John', mark: 80, prop: {} } 
  getinfo1: function () {
    setTimeout(() => {
      console.log(this);
    }, 2000);
  },

//Normal Function but used normal function inside setTimeout
//Output : Timeout { _called: false, _idleTimeout: 2000, _idlePrev: null, _idleNext: null, _idleStart: 114, … } (Window object)
  getinfo2: function () {
    setTimeout(function () {
      console.log(this);
    }, 2000);
  },


  //Arrow Function but used arrow function inside setTimeout
  //Output : {} 
  getinfo3: () => {
    setTimeout(() => {
      console.log(this);
    }, 2000);
  },

  //Arrow Function but used normal function inside setTimeout
  //Output : Timeout { _called: false, _idleTimeout: 2000, _idlePrev: null, _idleNext: null, _idleStart: 114, … } (Window object)
  getinfo4: () => {
    setTimeout(function () {
      console.log(this);
    }, 2000);
  },
};



console.log(student.getName());
console.log(student.getMark());

student.getinfo1();
student.getinfo2();

student.getinfo3();
student.getinfo4();

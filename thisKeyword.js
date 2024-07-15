const student = {
    name: 'John',
    age: 20,
    getDetails: function() {
        console.log(this.name, this.age);
    }
}

student.getDetails(); 

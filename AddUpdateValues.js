const Student = {
    name: "Subhajyoti",
    age: 20,
    marks: 94.3,
    city: "Bhubaneswar"
};
console.log(Student);

// Update the values of the object
Student["city"] = "Delhi";
console.log(Student);

// Add new values to the object
Student.gender = "Male";
console.log(Student);

// Update the values of the object
Student.marks = "A";
console.log(Student);

// Delete the values of the object
delete Student.city;
delete Student["age"]
console.log(Student);

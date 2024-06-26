// With let keyword its muable
let delhi = {
    latitude: "28.7041 N",
    longitude: "77.1025 E",
} 

console.log(delhi);
console.log(delhi.latitude);
console.log(delhi.longitude);

// const keyword its immutable
const Student = {
    name: "Subhajyoti",
    age: 20,
    marks: {
        maths: 90,
        science: 95,
        english: 85
    }
}

console.log(Student);
console.log(Student.name);
console.log(Student.age); 
console.log(Student.marks);
console.log(Student.marks.maths);
console.log(Student.marks.science);
console.log(Student.marks.english); 

// Twitter Post Example

// The post inclued the following data : - Username , content , likes , retweets , tags

const post = {
    username: "Subhajyoti",
    content: "Hello World",
    likes: 10,
    retweets: 5,
    tags: ["#javascript", "#react", "#webdevelopment"]
}

console.log(post);


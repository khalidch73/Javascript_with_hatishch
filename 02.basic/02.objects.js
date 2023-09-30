// single ton objects 
// object literals
var user = {
    name: "khalid",
    "full_name": "khalid nawaz",
    age: 28,
    location: "okara",
    email: "khalid73@gmail.com",
    logged: true,
    last_logged: ["monday", "tuesday"],
    greeting: function () {
        console.log("hello khalid your logged in now");
    },
};
// console.log(user.name);
// console.log(user["full_name"]); // array method to access the value 
// console.log(user.full_name);    // dot method to access the value 
user.age = 30; // we can change the values of a object
//console.log(user.age);
Object.freeze(user); // after freeze the objects we can not change the values 
user.age = 40;
//console.log(user.age);
console.log(user.greeting);

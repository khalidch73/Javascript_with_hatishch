// single ton objects 
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// object literals
var user = {
    name: "khalid",
    "full_name": "khalid nawaz",
    age: 28,
    location: "okara",
    email: "khalid73@gmail.com",
    logged: true,
    last_logged: ["monday", "tuesday"],
    greeting: ["hello khalid your logged in now"]
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
var new_user1 = new Object(); // single ton object 
var new_user2 = {}; // non single ton object 
// add multiple objects in a single object 
var student = {
    personal_information: {
        name: "khalid",
        age: 28,
        class: "BS-IT",
    },
    qualification: {
        matric: "1st division",
        fsc: "1st division",
    }
};
console.log(student.personal_information.name);
console.log(student.qualification.fsc);
// 
var combine = __assign(__assign({}, user), student);
console.log(combine);
var combine1 = Object.assign({ user: user, student: student });
console.log(combine1);

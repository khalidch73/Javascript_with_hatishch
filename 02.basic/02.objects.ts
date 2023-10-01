// single ton objects 


// object literals

const user ={
    name: "khalid",
    "full_name" :"khalid nawaz",
    age :28,
    location :"okara",
    email: "khalid73@gmail.com",
    logged : true,
    last_logged :["monday", "tuesday"],
    greeting :["hello khalid your logged in now"]
}
// console.log(user.name);
// console.log(user["full_name"]); // array method to access the value 
// console.log(user.full_name);    // dot method to access the value 
user.age =30                    // we can change the values of a object
//console.log(user.age);
Object.freeze(user)             // after freeze the objects we can not change the values 
user.age = 40
//console.log(user.age);
console.log(user.greeting);
const new_user1  = new Object()// single ton object 
const new_user2 = {}           // non single ton object 
// add multiple objects in a single object 
let student ={
    personal_information : {
        name : "khalid",
        age : 28,
        class : "BS-IT",
    },
    qualification: {
        matric : "1st division",
        fsc :"1st division",
    }
}
console.log(student.personal_information.name);
console.log(student.qualification.fsc);
//  combine to objects to gether 
let combine ={...user, ...student}
console.log(combine);
// API
// https://randomuser.me/ for api
// https://jsonformatter.org/ for read and beautification






// function is basically used to make a package of multiple elements
// definition of function 
//function name() {
//};
function myData() {
    console.log("My name is khalid nawaz ");
    console.log("My age is 20 years");
    console.log("Im graduate from UOS. PK");
}
myData();
// myData is reference and () is execution of myData.
function addTwoFunction(number1, number2) {
    console.log(number1 + number2);
}
addTwoFunction(2, 4); //arguments
function addTwoFun(number1, number2) {
    console.log(number1 + number2);
}
var result = addTwoFun(2, 2); //arguments
console.log(addTwoFun); // its run but its not put a value if we want return back some value we will use return function back
// how to use return in  function 
function addMore(number3, number4) {
    // let result1 = number3 + number4;
    // return result1                 => method 1 
    return number3 + number4; // => method 2 to return its a easy method with same results.
}
var result1 = addMore(4, 5);
console.log("result", result1);
// other method to return function 
// for example one user come to our website and we just print  a message for you are just log in using function 
function welcomeToUser(userName) {
    return "Hello! ".concat(userName, " You are just log in.");
}
console.log(welcomeToUser("khalid"));
// how to check the user name ? we use if else statement to check the user name 
function welcomeToUserCheck(userName) {
    if (userName === undefined) {
        console.log("kindly add your userName");
    }
    return "Hello! ".concat(userName, " You are just log in.");
}
console.log(welcomeToUserCheck(""));
// make a shopping a card using function
function shoppingCard() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    // You can now use the 'numbers' array to access the passed arguments.
    // For example, you can calculate the sum of all passed numbers.
    var sum = numbers.reduce(function (acc, num) { return acc + num; }, 0);
    return sum;
}
console.log(shoppingCard(345, 100, 200, 35, 5675, 86799, 35523, 6758, 995, 2525, 7589, 4636, 75866, 4356, 6868654)); // Output: 7100056
// Create an object that matches the defined interface
var user = {
    name: "ali",
    id: 123
};
// Define the function that accepts an object of the specified interface
function handleObject(anyobject) {
    console.log("userName ".concat(anyobject.name, ", userId ").concat(anyobject.id));
}
// Call the function and pass the object
handleObject(user);

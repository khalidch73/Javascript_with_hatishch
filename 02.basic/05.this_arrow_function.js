// (this) is used in current context for call the function 
var user = {
    userName: "khalid",
    price: 540,
    welcome: function () {
        console.log("".concat(this.userName, ", welcome to our website."));
    }
};
user.welcome();
user.userName = "waleed";
user.welcome();
user.userName = "shoaib";
user.welcome();
user.userName = "Iqra";
user.welcome();
user.userName = "Attia";
user.welcome();
//username, price and welcome is a current context so when we call the current context we will use (this).
console.log(this); //in global context if we print this its will show {}.
function name1() {
    console.log(this);
}
name1();
// if we print this in function in (node context) its will show maximum value like this.
// <ref *1> Object [global] {
//     global: [Circular *1],
//     queueMicrotask: [Function: queueMicrotask],
//     clearImmediate: [Function: clearImmediate],
//     setImmediate: [Function: setImmediate] {
//       [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     },
//     structuredClone: [Function: structuredClone],
//     clearInterval: [Function: clearInterval],
//     clearTimeout: [Function: clearTimeout],
//     setInterval: [Function: setInterval],
//     setTimeout: [Function: setTimeout] {
//       [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     },
//     atob: [Function: atob],
//     btoa: [Function: btoa],
//     performance: Performance {
//       nodeTiming: PerformanceNodeTiming {
//         name: 'node',
//         entryType: 'node',
//         startTime: 0,
//         duration: 68.91479999944568,
//         nodeStart: 6.897599998861551,
//         v8Start: 12.869699999690056,
//         bootstrapComplete: 47.097199998795986,
//         environment: 24.892899999395013,
//         loopStart: -1,
//         loopExit: -1,
//         idleTime: 0
//       },
//       timeOrigin: 1696141395652.811
//     },
//     fetch: [AsyncFunction: fetch]
//   }
//================================ how to make a arrow function?==========================//
var myData = function () {
    console.log("This is a arrow function.");
};
myData();
// new method to write the function 
// implicit return method => we used return key in this method 
var newFunctionMethod = function (number1, number2) {
    return number1 + number2;
};
console.log(newFunctionMethod(3, 4));
// explicit return method return key world not be used in this method.
var newFunctionMethod1 = function (number1, number2) { return number1 + number2; };
console.log(newFunctionMethod1(4, 4));
// if we want return an object in explicit method how we can this?
var returnObject = function () { return ({ name: "khalid" }); };
console.log(returnObject());

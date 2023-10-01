// function is basically used to make a package of multiple elements
// definition of function 
                  //function name() {
    
                  //};

function myData() {
    console.log("My name is khalid nawaz ");
    console.log("My age is 20 years");
    console.log("Im graduate from UOS. PK");
}
myData()
// myData is reference and () is execution of myData.
function addTwoFunction(number1 :number, number2:number) {
    console.log(number1 + number2);
    
}
addTwoFunction(2,4) //arguments

function addTwoFun(number1 :number, number2:number) {
    console.log(number1 + number2);
    
}
 let result = addTwoFun(2,2) //arguments
 console.log(addTwoFun); // its run but its not put a value if we want return back some value we will use return function back
 
// how to use return in  function 
function addMore(number3: number, number4:number) {
    // let result1 = number3 + number4;
    // return result1                 => method 1 
    return number3 + number4       // => method 2 to return its a easy method with same results.
}
const result1 = addMore(4, 5)
console.log("result", result1);
// other method to return function 
// for example one user come to our website and we just print  a message for you are just log in using function 
function welcomeToUser(userName :string) {
    return `Hello! ${userName} You are just log in.`
}
console.log(welcomeToUser("khalid"));
// how to check the user name ? we use if else statement to check the user name 
function welcomeToUserCheck(userName :string) {
    if (userName === undefined) {
        console.log("kindly add your userName");
        
    }
    return `Hello! ${userName} You are just log in.`
}
console.log(welcomeToUserCheck(""));

// make a shopping a card using function
function shoppingCard(...numbers: number[]): number {
    // You can now use the 'numbers' array to access the passed arguments.
    // For example, you can calculate the sum of all passed numbers.
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum;
}

console.log(shoppingCard(345, 100, 200,35,5675,86799,35523,6758,995,2525,7589,4636,75866,4356,6868654)); // Output: 7100056
// // how to add an object in a function?
// let user ={
//     name : "ali",
//     id: 123,
// }
// function handleObject(anyobject:any) {
//     console.log(`userName ${anyobject.user.name}, userId ${anyobject.user.id}`);
    
// }
// handleObject(user)


// Define an interface to describe the structure of the object
interface User {
    name: string;
    id: number;
}

// Create an object that matches the defined interface
let user: User = {
    name: "ali",
    id: 123
};

// Define the function that accepts an object of the specified interface
function handleObject(anyobject: User) {
    console.log(`userName ${anyobject.name}, userId ${anyobject.id}`);
}

// Call the function and pass the object
handleObject(user);

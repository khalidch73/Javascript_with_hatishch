"use strict";
let First_name = "khalid nawaz ch";
console.log(First_name);
console.log(typeof (First_name));
console.log(First_name.length);
console.log(First_name.toLocaleLowerCase());
console.log(First_name.toLowerCase());
console.log(First_name.toUpperCase());
console.log(First_name.charAt(5)); //      => by this method we can see the character number of string.
console.log(First_name.charAt(10)); // 
console.log(First_name.charAt(7)); // 
console.log(First_name.indexOf("a")); //   
console.log(First_name.indexOf("l")); //    
console.log(First_name.indexOf("i")); // 
//console.log(First_name.includes("nawaz")); 
console.log(First_name.substring(0, 6)); // khalid // make a new string from 0-6 elements
console.log(First_name.slice(0, 6)); // cut 0-6 element from string  
//console.log(First_name.slice(-4, 6));     // we can also use negative value in slice method 
let newName = "       waleed ch     ";
console.log(newName);
console.log(newName.trim()); // to remove extra white spaces and spaces 
console.log(First_name.replace("ch", "bandesha")); // remove and replace from one element to other.

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var my_array = [1, 2, 3, 4, 5];
//console.log(my_array[0]);
//method 1
var my_friends = ["asid", "raffay", "ali"];
// console.log(my_friends);
// console.log(my_array.push(6)); //add value at last its will changed the original array values
// console.log(my_array);
// console.log(my_array.pop()); // remove value at last
// console.log(my_array.unshift(0));// add value at start 
// console.log(my_array.shift());// remove value from start
//console.log(my_array.includes(8));// result will be in boolean value 
// console.log(my_array.indexOf(4)); // its tell us index position 0f 4 in a specific area 
// console.log(my_array.slice(1, 3)); // make a new section of array from 1 value t0 2nd 3rd will not be included.
var my_array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
//console.log(my_array1.splice(4, 1));
var school_friends = ["ali", "hamza", "saad"];
var university_friends = ["asid", "raffay", "abbas"];
var combine_friends = school_friends.concat(university_friends);
//console.log(combine_friends); // combine two arrays to each others
var all_friends = __spreadArray(__spreadArray([], school_friends, true), university_friends, true); // spread method  its work same like concat
console.log(all_friends);
var new_method = [1, 2, 3, [4, 5, 6, 7], 8, 9, 10, [11, 12, 13, 14], 15, 16];
//console.log(new_method.flat(Infinity));
console.log(Array.isArray(123)); //false
//console.log(Array.from("ali"));
var a = 123;
var b = 456;
var c = 789;
console.log(Array.of(a, b, c));

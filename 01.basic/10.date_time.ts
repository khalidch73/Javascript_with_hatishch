//==============Date in JavaScript start from 01-01-1970=================//
// date calculate in millisecond 
let My_date = new Date ()
console.log(My_date);
console.log(My_date.toString());
console.log(My_date.getDate());
console.log(My_date.getDay());
console.log(My_date.getFullYear());
console.log(My_date.getTimezoneOffset());
console.log(My_date.toJSON());
console.log(My_date.toLocaleDateString());
console.log(My_date.toLocaleTimeString());
console.log(typeof(My_date));
let create_My_date = new Date(2023,0,20)
console.log(create_My_date);
console.log(create_My_date.toLocaleDateString());
let create_My_date1 = new Date("01-23-2023")
console.log(create_My_date1.toLocaleDateString());
let time_stamp = Date.now()
console.log(time_stamp);
console.log(Math.floor(time_stamp/1000));
My_date.toLocaleString('default', {
    month : "2-digit"
}) 

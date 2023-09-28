"use strict";
// -------------Number------------ // 
let New_score = 1230;
console.log(New_score);
console.log(New_score.toString().length);
console.log(New_score.toFixed(2)); //1230.00 to convert your value in decimal. 
let New_score1 = 234.4535;
console.log(New_score1.toPrecision(3)); //234 to round of the value 
let New_score2 = 234.9535;
console.log(New_score2.toPrecision(4)); //235.0 to round of the value 
let New_score3 = 2343425;
console.log(New_score3.toLocaleString()); //2,343,425  to usa stander
let New_score4 = 2343425;
console.log(New_score3.toLocaleString(`en-PK`)); //2,343,425  to pakistan stander
let New_score5 = 2343425;
console.log(New_score3.toLocaleString(`en-IN`)); //2,343,425  to indian stander
console.log(New_score3.valueOf()); // number
// -------------Math--------------//
console.log(Math);
console.log(Math.abs(4)); // absolute value
console.log(Math.abs(-4));
console.log(Math.round(42125.5435)); // 42126 round of the decimal value.
console.log(Math.ceil(3.1)); // celling mean top its make the value high like 3.1 become 4.
console.log(Math.floor(5.9)); // floor mean low its make the value 5.9 to 5.
console.log(Math.min(424, 2312, 4534, 67, 7545, 43, 3664, 46, 43245, 44, 31, 6747)); // minimum value 31 
console.log(Math.max(424, 2312, 4534, 67, 7545, 43, 3664, 46, 43245, 44, 31, 6747)); // maximum value 43245
console.log(Math.random()); // random value each time between 0 to 1 =  0.1066244030205159
console.log(Math.random() * 10); // random value each time between 1 t0 2 =  4.96379405347202
console.log((Math.random() * 10) + 1); // random value each time between 1 t0 2 its must = 4.546937739899478
console.log((Math.ceil(Math.random() * 10)) + 1); // use round of the value to maximum high value
console.log((Math.floor(Math.random() * 10)) + 1); // use round of the value to minimum low value
let min = 10;
let max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // value will be between 10 to 20.

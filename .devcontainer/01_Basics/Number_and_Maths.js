const score = 440
console.log(score)
const balance = new Number(0.003);
console.log(balance)
/* there is  following methods of number class
toString()	Returns a number as a string
toExponential()	Returns a number written in exponential notation
toFixed()	Returns a number written with a number of decimals
toPrecision()	Returns a number written with a specified length
valueOf()	Returns a number as a number
*/
console.log(balance.toExponential(4))
 let x =9.123563;
 console.log(x.toFixed(2))
 console.log(x.toPrecision(5))
 //+++++++++++++++++++++++++++++Maths+++++++
 // console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));
console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)


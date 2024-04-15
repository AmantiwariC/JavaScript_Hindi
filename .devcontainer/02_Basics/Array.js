//An array is a special variable, which can hold more than one value:
const fabMovie= ["SpiderMan","KGF","King Kong"]
console.log(fabMovie)
//create js array by using object
const fabBike = new Array();
fabBike.push("Bullet")
fabBike.push("Thunder")
fabBike.push("KTM")
console.log(fabBike)
//Oh I added wrong bike so I can easily pop out the last one
fabBike.pop()
console.log(fabBike)
// we can access array element by using index postion
console.log(fabMovie[0])
//You can have objects in an Array. You can have functions 
//in an Array. You can have arrays in an Array:
fabBike[0] = fabMovie;
console.log(fabBike)
/*
Array Properties and Methods
The real strength of JavaScript arrays are the
 built-in array properties and methods:
*/
const Friend_Birthday =[29,15,13,19,24,2,16]
console.log(Friend_Birthday.sort())
console.log(Friend_Birthday.length)
//let's understand the star que diff b/w slice nd splice 
Fake_Friend_Birthday = Friend_Birthday.slice(0,2)
console.log(Fake_Friend_Birthday)
console.log(Friend_Birthday)
//here we can easily saw that there is no changes in original array 
// but when we use splice original array also change
Fake_Friend_Birthday = Friend_Birthday.splice(0,2)
console.log(Fake_Friend_Birthday)
console.log(Friend_Birthday)
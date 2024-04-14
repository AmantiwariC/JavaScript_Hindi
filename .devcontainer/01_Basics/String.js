const name ="aman"
const age = 21
 
console.log(`Hello my name is ${ name} and my age is ${ age}` )
const name1 = new String("Anuj")
// here I create an object which have some property and method for e.g
console.log(name1.toUpperCase())
//lets understand all the function/method of the string
//1. String length which retuen the length of the string
console.log(name1.length)
//2. charAt() method which return character at specific index position 
console.log(name1.charAt(2))
//3. charCodeAt() :The charCodeAt() method returns the code of the character at a specified index in a string:
console.log(name1.charCodeAt(2))
//4.  The at() method returns the character at a specified index (position) in a string.
console.log(name1.at(1))
/*  Extracting String Parts
There are 3 methods for extracting a part of a string:

slice(start, end)
substring(start, end)
substr(start, length)
*/
//slice() extracts a part of a string and returns the extracted part in a new string.
//The method takes 2 parameters: start position, and end position 
//If a parameter is negative, the position is counted from the end of the string:
console.log(name1.slice(-2,-1))
// JavaScript String substring()
// The difference is that start and end values less than 0 are treated as 0 in substring().
let str = "Apple, Banana, Kiwi";
console.log(str.substring(-2,13))
/* JavaScript String substr()
substr() is similar to slice().

The difference is that the second parameter specifies the length of the extracted part.
*/
console.log(str.substr(0,5))
//If the first parameter is negative, the position counts from the end of the string.
console.log(str.substr(-4))
/* Converting to Upper and Lower Case
A string is converted to upper case with toUpperCase():

A string is converted to lower case with toLowerCase():
*/
console.log(name1.toLowerCase())
console.log(name1.toUpperCase())
/* JavaScript String concat()
concat() joins two or more strings:
*/
const name2= "Tiwari";
console.log(name1.concat(' ',name2))
/* JavaScript String trim()
The trim() method removes whitespace from both sides of a string:
*/
let name3 ="         Ankit     "
console.log(name3.trim())
//there is two trim 1.trimStart() 2. trimEnd()
//trimStart() trim the string from begin and trimEnd() trim the word at the end
console.log(name3.trimEnd())
//js String Padding :padStart() and padEnd() to support padding at beg & end
// padStart() : pad string with another string until its reaches a given length
// console.log(typeof name3)
let text = "5";
let padded = text.padStart(4,"0");
console.log(padded)
// let's understand toString() method which convert the promitive data to string
let code=312;
codetostr=code.toString()
console.log(codetostr) 
console.log(typeof codetostr)
//repeat()  method return the string with number of copies of string 
// it  return new string does not change original string
//syntex= string.repeat(count), here count mean number ofcopies you wanted 
console.log(name1.repeat(2))
/* Replace string content 
 replace() method is  used specified value with another value in a string
 */
let compName1="Sai Baba Murti Bhandar ,Sai Baba Murti Bhandar  ";
let compName2= compName1.replace("Sai Baba","Maa Nav Durga")
console.log(compName2)
// replce() only replace first match if you want to repace all matches use regular expresssion  /g flag set

let compName3 = compName1.replace(/Sai Baba/g, "Maa Nav Durga");
console.log(compName3);
/*JavaScript String split()
  A string can be converted into an array with split() mrthod
*/
console.log(str.split(','))
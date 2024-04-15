/*
Date objects are created with the new Date() constructor.

There are 9 ways to create a new date object:
new Date()
new Date(date string)

new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)

new Date(milliseconds)

*/
let mydate = new Date(2024,4,18,10,43);
console.log(mydate)
/*
Note
JavaScript counts months from 0 to 11:

January = 0.

December = 11.
*/
/*
Displaying Dates
JavaScript will (by default) output dates using 
the toString() method. This is a string representation of the date
, including the time zone. The format is specified in the ECMAScript
 specification:
*/
let D= new Date();
D.toString();
console.log(D)
//The toDateString() method converts a date to a more readable format:
console.log(D.toDateString())
//The toUTCString() method converts a date to a string using the UTC standard:
console.log(D.toUTCString())
//The toISOString() method converts a date to a string using the ISO standard:
console.log(D.toISOString())
/* The Date.now() Method
Date.now() returns the number of milliseconds since January 1, 1970.
*/
let ms = Date.now();
console.log(ms)
/*
Set Date methods let you set date values 
(years, months, days, hours, minutes, seconds, milliseconds) 
for a Date Object.

Set Date Methods
Set Date methods are used for setting a part of a date:

Method	Description
setDate()	Set the day as a number (1-31)
setFullYear()	Set the year (optionally month and day)
setHours()	Set the hour (0-23)
setMilliseconds()	Set the milliseconds (0-999)
setMinutes()	Set the minutes (0-59)
setMonth()	Set the month (0-11)
setSeconds()	Set the seconds (0-59)
setTime()	Set the time (milliseconds since January 1, 1970)
*/
const D2 = new Date();
D2.setFullYear(2020);
console.log(D2);
D.setDate(19)
console.log(D2)


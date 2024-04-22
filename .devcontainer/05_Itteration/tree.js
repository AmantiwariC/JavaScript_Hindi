// Array Specific loop
// const arr= [1,2,3,4,5,6,7]
// for ( const num of arr){
//     console.log(num);
// }
// const name ="Aman"
// for (const iterator of name) {
//     console.log(iterator);
    
// }

//Maps
const map =new Map()
map.set('In',"INDIA")
map.set('Aus',"Australia")
map.set('Sri',"SriLanka")
map.set('USA',"United State of america")

for (const [key,value] of map) {
    console.log(`${key} :- ${value}`);
}
//onject is not itterable through forof loop
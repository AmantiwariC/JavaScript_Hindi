//singleton: constructor 
//objects literals 
const mysym = Symbol("Key1")
const User1 ={
    name:"Aman",
    "Full Name":"Aman Tiwari",
    [mysym]:"mykey1",
    age : 23,
    location:"Varanas",
    email:"at336103@gmail.com"
}
console.log(User1.email)
console.log(User1["email"])
console.log(User1["Full Name"])
console.log(User1[mysym])
// if you want to change the object value u cn easily change 
User1["email"]= "amantiwari.cse@kashiit.ac.in"
console.log(User1["email"])
// if you want that object value should not be change than you ca  freeze 
// Object.freeze(User)
// adding fn to object 
User1.greeting = function(){
    console.log("Hello Aman");
}
console.log(User1.greeting())
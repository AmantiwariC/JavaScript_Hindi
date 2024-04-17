//creatting object 
const person ={}
person.id=21,
person.name="Aman",
person.loction="Varanasi"
console.log(person)
// for( let variable in person){
//     console.log(variable)
// }
//object can be nested
const user = {
    email: "at336103@gmailcom",
    fullname: {
        user_full_name: {
            first_name: "Aman",
            last_name: "Tiwari"
        }
    }
};

console.log(user.fullname.user_full_name.first_name);
//if  we want to combine object 
const obj1 ={a:1,b:2,c:3 }
const obj2 ={ d:4, e:5 ,f : 6}
const obj3 =Object.assign({},obj1,obj2)
console.log(obj3)
// we can combine the obj with  spred operator 
const obj4 = {...obj1,...obj2}
console.log(obj4)
const InstaUser = [
    {
        email:"amantiwari359@gmail.com",
        name :"girik Aman",
        age :21
    },
    {
        email:"shivamsri@gmail.com",
        name :"shivam sri",
        age :21
    },

    {
        email:"frree@gmail.com",
        name :"FRee Soul",
        age :29
    }
] 
console.log(InstaUser.length)
//this Object method return array 
console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))
//we can ask the that object have this property or not
console.log(person.hasOwnProperty('name'))
const course ={
    coursename : "Python with ds",
    price : 350,
    Course_Instructor :"Jose Portila"
}
//by this trick we can also call my object by desructuring 
const { Course_Instructor : instruct} = course;
console.log(instruct)
//use Json formater to understand the API format for free ApI use Randomuser api

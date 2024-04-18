const user ={
    username : "Aman",
    Acc_no : 21313311,
    welcome_message : function () {
        console.log(`${this.username}, welome to website`)
        // console.log(this)
    }
}
user.welcome_message()
user.username="anu"
user.welcome_message()

// this keyword refers to the object 
console.log(this); // here it will return empty object
// function chai(){
//     let user_name ="amn"
//     console.log(this.user_name);
// }
// chai()


/*Inside a regular function (not an arrow function), the value of this depends on how the function is called.
When chai() is called as a simple function invocation (as in your example), this inside the chai function will refer to the global object in non-strict mode.
If you're running this code in a browser, the global object would be Window.
If you're running this code in Node.js, the global object would be global.
*/
// const chai = function(){
//     let user_name="aman"
//     console.log(this)
// }
// chai()
const chai = ()=>{
    let user_name="aman"
    console.log(this)
}
chai()
const addtwo =(num1,num2) => num1+num2
console.log(addtwo(2,9))
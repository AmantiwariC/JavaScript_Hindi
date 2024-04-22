// const arr = [2,3,4,5,6]
// arr.forEach( function(num){
//     console.log(num);
// })
// console.log(arr);
// arr.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })
 const myCoading = [
    {
        Language:"Java",
        Language_name:"xyz.java"
    },
    {
        Language:"Python",
        Language_name:"xyz.py"
    },
    {
        Language:"JavaScript",
        Language_name:"xyz.js"
    },
    {
        Language:"C",
        Language_name:"xyz.C"
    }
]
myCoading.forEach((val)=>{
    console.log(val.Language_name);
})
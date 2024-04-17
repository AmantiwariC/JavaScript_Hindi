// we can pass multiple value in function by rest mrthod
function Calculate_Cart_Price(...num)
{
    let sum =0
    for (let i=0; i<num.length;i++){
        sum = sum+num[i]
    }
    return sum
}
ans = Calculate_Cart_Price(110,200,3000,200)
console.log(ans)
const user ={
    user_name :"Aman",
    age :21,
    caste:"Hindu"
}
function HandleObject(anyobj){
    console.log(`hy, my name is ${anyobj.user_name}, and I m ${anyobj.age} year old and my caste is ${anyobj.caste}`)
}
HandleObject(user)
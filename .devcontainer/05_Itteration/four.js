const myObj={
    js:"Javascript",
    cpp:'c++',
    py:'Python',
    rb:'ruby'
}
//for  in loop for object 
for (const key in myObj) {
    console.log(` object key is ${key} & value is ${myObj[key]}`)
}
for (let i = 0; i <= 10; i++) {
    if(i==5 ){
        console.log("5 is best ");
        continue;
    }
    console.log(i);
}
for (let index = 0; index < 10; index++) {
    console.log(index);
    for (let j = 0; j < 10; j++) {
       console.log(`Inner loop value is ${j} and outer loop value is ${index} `);
        
    }
    
}
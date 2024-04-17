function add_two_num(num1,num2){
    return num1+ num2;
}
sum= add_two_num(2,4);
console.log(sum)

function swap(x, y) {
    var t = x;
    x = y;
    y = t;
    return [x, y];
}

const [swappedX, swappedY] = swap(2, 3);
console.log(`Swapped x: ${swappedX}`);
console.log(`Swapped y: ${swappedY}`);



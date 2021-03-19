function add(num1 , num2 = 10){    //10 is default value if num2 not declare.
     num2 = num2 || 0;
    return num1 + num2;
}  

const total = add(15,20);
console.log(total);
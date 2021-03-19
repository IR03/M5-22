// function doubleIt(num){
//     return num*2;
// }

// const doubleIt = function(num){
//     return num*2;
// }

//const doubleIt = num => num*2;

//const doubleIt = (x,y) => x*y;

//const doubleIt = () => 5;

const doubleIt = (x,y) =>{
    const sum = x+y;
    const diff= x-y;
    const result = sum + diff;
    return result;
}


const result = doubleIt(10,5);
console.log(result);

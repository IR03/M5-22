        //three dot means convert array to string.


//  const number1 = 6;
//  const number2 = 10;
//  const number3 = 8;
//const result = Math.max(number1, number2, number3);

 const number1 = [6,10,19];
 const number2 = [11,13,22];
 const number3 = [14,18,25];
 const result = Math.max(...number1, ...number2, ...number3); 
 console.log(result);

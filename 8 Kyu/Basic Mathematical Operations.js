// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

// step 1: create a function that takes in three arguments call it basicOp
// step 2: create a conditional that will check the operation
// step 3: return the conditional
// step 4: create a variable that will hold the string operators
// step 5: create checks for each operator and return the correct math. 


let operation = ['+', '-', '*', '/'];

function basicOp(operation, value1, value2) {
if(operation === '+'){
    return (value1 + value2);
}else if (operation === '-'){
    return (value1 - value2);
}else if (operation === '/'){
    return (value1 / value2);
}else if (operation === '*'){
    return (value1 * value2)
}else{
    return "incorrect inputs choose 1 operator '+', '-', '*', '/' then choose two numbers"
}

}

console.log(basicOp('+', 14, 27));

// output: 41



    

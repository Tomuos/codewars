// DESCRIPTION:
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

//step 1: create a function that takes in a number call it descendingOrder

//step 2: create a variable that will hold the number converted to a string 

//step 3: create a variable that will hold the string converted to an array using the split method 

//step 4: create a variable that will hold the array sorted in descending order using the sort method

//step 5: create a variable that will hold the array converted to a string using the join method

//step 6: create a variable that will hold the string converted to a number using the parseInt method

//step 7: return the number 



function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
    }

    console.log(descendingOrder(123456789));

//output: 987654321

// Other Solutions:

// function descendingOrder(n){
//     return +(n + '').split('').sort(function(a,b){ return b - a }).join('');


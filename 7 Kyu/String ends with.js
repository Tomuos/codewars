// DESCRIPTION:
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

//step 1: create a function that takes in two strings call it solution
//step 2: create a conditional that will check if the first string ends with the second string
//step 3: return the conditional


function solution(str, ending){
    return str.indexOf(ending, str.length - ending.length) !== -1;
    
    }
    console.log(solution('abc', 'bc'))
    console.log(solution('abc','d'))

//output: true



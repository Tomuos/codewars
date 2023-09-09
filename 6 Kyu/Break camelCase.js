// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// step 1: function that takes in a string
// step 2: create a variable that will hold the new string and set it to an empty string
// step 3: create a for loop that will loop through the string
// step 4: create a conditional statement that will check if the current character is uppercase
// step 5: if the current character is uppercase add a space and the current character to the new string
// step 6: else add the current character to the new string
// step 7: return the new string

function solution(string) {
    let newWord = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase()) {
            newWord  += ' ' + string[i];
        } else {
            newWord  += string[i];
        }
    }
    return newWord;
}

console.log(solution('camelCasing')); // Output should be camel Casing
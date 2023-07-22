// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


//step 1: create a function that takes in a string call it XO
//step 2: create a variable that will hold the string converted to lowercase using the toLowerCase method
//step 3: create a variable that will hold the string converted to an array using the split method
//step 4: create a variable that will hold the array filtered for the letter x using the filter method
//step 5: create a variable that will hold the array filtered for the letter o using the filter method
//step 6: create a conditional that will check if the length of the x array is equal to the length of the o array
//step 7: return the conditional

function XO(str) {
    let lowerCase = str.toLowerCase()
    let arr = lowerCase.split('')
    let x = arr.filter(x => x === 'x')
    let o = arr.filter(o => o === 'o')
    if (x.length === o.length) {
        return true
    } else {
        return false
    }
}

console.log(XO('ooxx'))

//output: true
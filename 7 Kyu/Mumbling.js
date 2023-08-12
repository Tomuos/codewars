// DESCRIPTION:
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// Step 1: create a function that takes in a string call it accum
// Step 2: create a variable that will hold the string of letters
// Step 3: create a conditional that will check the string for the letters
// Step 4: return the string with the letters replaced


function accum(s) {
    let lowerCaseSplit = s.toLowerCase().split("");
    let result = [];
  
    for (let i = 0; i < lowerCaseSplit.length; i++) {
      let capitalized = lowerCaseSplit[i].toUpperCase();
      let repeated = lowerCaseSplit[i].repeat(i);
      result.push(capitalized + repeated);
    }
  
    return result.join("-");
  }
  
  console.log(accum("Thomas"));

//   // output: "T-Hh-Ooo-Mmmm-Aaaaa-Sssssss"


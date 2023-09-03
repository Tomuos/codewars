// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. 
// The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// step 1 create a function that takes in a string function duplicateCount(text)
// step 2 create a variable that will hold the text and convert it to lowercase
// step 3 create a variable that will hold the text and split it into an array
// step 4 create a variable that will hold the text and split it into an array and sort it
// step 5 create a variable that will hold the text and split it into an array and sort it and join it
// step 6 create a variable that will hold the text and split it into an array and sort it and join it and replace it 


 function duplicateCount(text){
    let textLow = text.lowerCase();
    let textSplit = textLow.split("");
    let textSort = textSplit.sort();
    let textJoin = textSort.join("");
    let textReplace = textJoin.replace(/(.)\1+/g, '$1'); // regex to replace duplicate characters with a single character 
    return textReplace.length;
 }

    console.log(duplicateCount("abcde"));

    // output: [1] 0

    console.log(duplicateCount("aabbcde"));

    // output: [1] 2
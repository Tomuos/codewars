// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return

// "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function alphabetPosition(text) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    
    for (let i = 0; i < text.length; i++) {
        let char = text[i].toLowerCase();
        let index = alphabet.indexOf(char);
        
        if (index > -1) {
            result += (index + 1) + ' ';
        }
    }
    
    // Remove the extra space at the end
    result = result.trim();
    
    return result;
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));


// Other solutions from Codewars: let alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');

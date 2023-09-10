// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

function digitize(n) {
    // Convert number to string and split into array of digits
    const digits = String(n).split('');
    // Reverse the order of the digits and convert back to numbers
    return digits.reverse().map(Number);
  }
  
  
  console.log(digitize(35231)); // Output: [1, 3, 2, 5, 3]
  console.log(digitize(0));     // Output: [0]
  console.log(digitize(12345)); // Output: [5, 4, 3, 2, 1]

  
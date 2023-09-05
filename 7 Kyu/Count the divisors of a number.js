// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
// Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.

// step 1 create a function that takes in a number function getDivisorsCnt(n)
// step 2 create a variable that will hold the number of divisors and set it to 0
// step 3 create a for loop that will loop through the number and increment by 1
// step 4 create a conditional statement that will check if the number is divisible by i
// step 5 if the number is divisible by i then increment divisors by 1
// step 6 return divisors

function getDivisorsCnt(n) {
    let divisors = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            // If divisors are the same, count only one
            if (n / i === i) {
                divisors++;
            } else {
                // Else count both
                divisors += 2;
            }
        }
    }
    return divisors;
}

console.log(getDivisorsCnt(4));  // Output should be 3
console.log(getDivisorsCnt(5));  // Output should be 2
console.log(getDivisorsCnt(12)); // Output should be 6
console.log(getDivisorsCnt(30)); // Output should be 8

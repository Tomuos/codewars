// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

// Step 1 create a function that takes in an array of numbers and a number function betterThanAverage(classPoints, yourPoints)
// Step 2 create a variable that will hold the average and set it to 0 
// Step 3 create a for loop that will loop through the array and add each number to the average
// Step 4 create a variable that will hold the average and set it to the length of the array
// Step 5 create a conditional statement that will check if your points is greater than the average
// Step 6 if your points is greater than the average return true else return false

function betterThanAverage(classPoints, yourPoints) {
    let average = 0;
    for (let i = 0; i < classPoints.length; i++) {
        average += classPoints[i];
    }
    average /= classPoints.length;
    return yourPoints > average ? true : false;
}

console.log(betterThanAverage([2, 3], 5)); // Output should be true
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

let x = [1, 2, 3, 4, 5]

function grow(x){
const result = x.reduce((total, number) => {
  return total * number
});
  return result
}

console.log(grow(x));

//output: 120
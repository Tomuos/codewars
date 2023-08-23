// DESCRIPTION:
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// Step 1: create a function that takes in an array call it likes
// Step 2: create a conditional that will check the array for the names
// Step 3: return the string with the names replaced
// Step 4: create a conditional that will check the array for the names
// Step 5: return the string with the names replaced


let names = [
    [],
    ['Peter'],
    ['Jacob', 'Alex'],
    ['Max', 'John', 'Mark'],
    ['Alex', 'Jacob', 'Mark', 'Max'],
  ];
  
  function likes(names) { //object entries method ()
    return {
      0: 'no one likes this',
      1: `${names[0]} likes this`,
      2: `${names[0]} and ${names[1]} like this`,
      3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
      4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
    }[Math.min(4, names.length)];// Math.min looks for the smallest value 
  }
  console.log(likes(names[0]));
  console.log(likes(names[1]));
  console.log(likes(names[2]));
  console.log(likes(names[3]));
  console.log(likes(names[4])); //should work with (likes([any array you want]))

  // output: [0] no one likes this
        //    [1] Peter likes this
        //     [2] Jacob and Alex like this
        //      [3] Max, John and Mark like this
        //       [4] Alex, Jacob and 2 others like this

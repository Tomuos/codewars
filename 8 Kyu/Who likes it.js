// DESCRIPTION:
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

// step 1: create a function that takes in an array call it likes
// step 2: create a conditional that will check the length of the array
// step 3: return the conditional
// step 4: create a variable that will hold the string no one likes this 
// step 5: create a variable that will hold the string likes this
// step 6: create a variable that will hold the string and like this
// step 7: create a variable that will hold the string and others like this
// step 8: create a variable that will hold the string others like this
// step 9: create a variable that will hold the string and like this
// step 10: create a variable that will hold the string and like this



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

// output: 
// no one likes this
// Peter likes this
// Jacob and Alex like this
// Max, John and Mark like this
// Alex, Jacob and 2 others like this


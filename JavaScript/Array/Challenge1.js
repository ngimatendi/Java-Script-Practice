// Make a array of fruits and using map add some message to each fruit and print it on console.

// let fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];

// let message = fruits.map((fruit) => {
//   return `I like ${fruit}`;
// });

// console.log(message);

// let friends = ["Ming", "Sijan", "Sujan", "Rajendra", "Aayush", "Prajwol"];

// friends.forEach(friend => {
//     console.log(`Hello Mr. ${friend}`);
// });

// let message = friends.map((friend) => {
//   return `Hello Mr. ${friend}`;
// });

// console.log(message);

// Use filter to create a new array with ages 18 or older
// console.log(adults); // Output: [18, 22, 30, 19]

const ages = [12, 18, 22, 30, 8, 19, 25];

const adults = ages.filter(function(age){
  return age >= 18;
});

console.log(adults);
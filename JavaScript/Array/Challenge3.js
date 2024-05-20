// Write a function that takes an array of numbers and returns a new array with each number squared.

// **Hint**: Use `map` to transform each element.

const numbers = [1, 2, 3, 4, 5, 6];

const squareNumbers = numbers.map(function (number) {
  return number * number;
});

console.log(squareNumbers);

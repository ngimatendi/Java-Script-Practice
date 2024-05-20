let numbers = [];

for (let i = 1; i <= 20; i++) {
  numbers.push(i);
}

console.log(numbers);

let evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

console.log(evenNumbers);
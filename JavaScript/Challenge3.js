// 1. Create variables for three numbers.
// 2. Use comparison operators to determine which number is the largest.
// 3. Output the largest number.

const num1 = 40;
const num2 = 50;
const num3 = 30;

if (num1 > num2 && num1 > num3) {
  console.log(num1 + " is the largest number.");
} else if (num2 > num1 && num2 > num3) {
  console.log(num2 + " is the largest number.");
} else {
  console.log(num3 + " is the largest number.");
}

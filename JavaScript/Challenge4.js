// Given the following variables, use template literals to create a sentence:
// ```javascript
// let productName = "Laptop";
// let price = 999.99;
// let quantity = 2;
// Expected output: `"You bought 2 Laptops for a total of $1999.98."`

let productName = "Laptops";
let price = 999.99;
let quantity = 2;
let total = price * quantity;

console.log(`You bought ${quantity} ${productName} for a total of $${total}`);

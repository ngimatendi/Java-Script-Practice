// 1. Create variables for the prices of three items.
// 2. Calculate the total price by adding the individual item prices.
// 3. Apply a discount (10%) to the total price.
// 4. Output the discounted total.

var item1 = 10;
var item2 = 20;
var item3 = 30;

var total = item1 + item2 + item3;
var discount = total * 0.1;
var netAmount = total - discount;

console.log(netAmount);
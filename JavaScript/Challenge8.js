// Write a function that checks whether a given value is considered truthy or falsy in JavaScript.
// fuction name is isTruthyOrFalsy

function isTruthyOrFalsy(value) {
  if (value) {
    return "This statement returns truthy statement.";
  } else {
    return "This statement returns falsy statement.";
  }
}

console.log(isTruthyOrFalsy(0));
console.log(isTruthyOrFalsy(1));

console.log(isTruthyOrFalsy(""));
console.log(isTruthyOrFalsy(null));
console.log(isTruthyOrFalsy(undefined));
console.log(isTruthyOrFalsy(NaN));
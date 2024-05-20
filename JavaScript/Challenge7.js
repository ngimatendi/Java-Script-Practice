// if else if:
//    The if elseif statement, also known as else if, is used to check multiple conditions in a sequence and execute different blocks of code based on the first true condition.

// Given a student’s score (an integer between 0 and 100), determine their grade based on the following rules:
// Write a script with if-else if statements to evaluate a given score and print the appropriate grade.

// •	If the score is 90 or above, assign ‘A’.
// 	•	If the score is between 80 and 89, assign ‘B’.
// 	•	If the score is between 70 and 79, assign ‘C’.
// 	•	If the score is between 60 and 69, assign ‘D’.
// 	•	If the score is below 60, assign ‘F’.

const marks = 85;

if (marks >= 0 && marks <= 100) {
  if (marks >= 90) {
    console.log(`Congratulations!!!!\nYour Marks is ${marks} and\nYou have achieved 'A' grade.`);
  } else if (marks >= 80) {
    console.log(`Well done!\nYour Marks is ${marks} and\nYou have achieved 'B' grade.`);
  } else if (marks >= 70) {
    console.log(`Good!\nYour Marks is ${marks} and\nYou have achieved 'C' grade.`);
  } else if (marks >= 60) {
    console.log(`Not bad!\nYour Marks is ${marks} and\nYou have achieved 'D' grade.`);
  } else {
    console.log(`Sorry!\nYour Marks is ${marks} and\nYou have achieved 'F' grade.`);
  }
} else {
  console.log("Please enter a valid marks between 0 and 100.");
}
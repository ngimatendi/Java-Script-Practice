// Challenge Task
// ### Challenge : Calculate Grades
// **Objective**: Use arithmetic and comparison operators to calculate grades and determine pass or fail.

// **Task**:
// 1. Create variables for scores in three subjects.
// 2. Calculate the average score.
// 3. Determine if the average is above a passing threshold (e.g., 50).
// 4. Output whether the student passed or failed.

const score1 = 80;
const score2 = 70;
const score3 = 90;

const averageScore = (score1 + score2 + score3) / 3;

if (averageScore >= 50) {
  console.log("Congratulations! Your hard work pays off.");
} else {
  console.log("Sorry, you need to work harder.");
}
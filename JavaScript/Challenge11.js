const age = 100;

if (age > 0 && age <= 120) {
  switch (true) {
    case age <= 2:
      console.log("You are a baby");
      break;
    case age <= 12:
      console.log("You are a child");
      break;
    case age <= 19:
      console.log("You are a Teenager");
      break;
    case age <= 30:
      console.log("You are a Young adult");
      break;
    case age <= 60:
      console.log("You are an Adult");
      break;
    case age <= 120:
      console.log("You are an Elderly");
      break;
  }
} else {
  console.log("Please enter a valid age!");
}

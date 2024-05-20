// 1. Create variables for a phone number and an email address entered by a user.
// 2. Check if the phone number contains 10 digits.
// 3. Check if the email address contains an "@" symbol.
// 4. If either validation fails, output an appropriate message. Otherwise, print "Login information is valid."

let phoneNumber = "9861715483";
let emailAddress = "ngimatendi12@gmail.com";

if (phoneNumber.length === 10 && emailAddress.includes("@")) {
  console.log("Login information is valid.");
} else {
  console.log("Invalid login information.");
}

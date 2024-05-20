/*
    Write a switch case input should be given as day of week
    when given the day name print the name accordingly
*/

let day = 5;

switch (day) {
    case 1:
        console.log("It's Sunday");
        break;
    case 2:
        console.log("It's Monday");
        break;
    case 3:
        console.log("It's Tuesday");
        break;
    case 4:
        console.log("It's Wednesday");
        break;
    case 5:
        console.log("It's Thursday");
        break;
    case 6:
        console.log("It's Friday");
        break;
    case 7:
        console.log("It's Saturday");
        break;
    default:
        console.log("The number of day you have selected is invalid\nPlease select a day between 1 to 7.");
        break;
}
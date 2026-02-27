/********* Solution 1: Switch Case for Day of the Week *********/
let day = "Monday";

switch (day) {
  case "monday":
    console.log("It's the start of the week.");
    break;
  default:
    console.log("It's a normal day.");
}
/**
 * Output: "It's a normal day. Because the switch case is checking for "monday" in lowercase, but the variable 'day' is assigned "Monday" with an uppercase 'M'. Since there is no match, it goes to the default case and prints "It's a normal day."
 */

/********* Solution 2: ATM Cash Withdrawal System ********/
let amountToWithdraw = 400;

if (amountToWithdraw % 100 === 0) {
  console.log("Withdrawal Successful!");
} else {
  console.log("Invalid amount! Please enter a multiple of 100.");
}

/********* SOlution 3: Calculator with Switch Case **********/
let operator = "-";
let num1 = 10;
let num2 = 5;
let result;

switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    result = num1 / num2;
    break;
  case "%":
    result = num1 % num2;
    break;
  default:
    console.log("Invalid operator! Please use +, -, *, /, or %.");
}

if (result !== undefined) {
  console.log(`The result of ${num1} ${operator} ${num2} is: ${result}`);
}

/********* Solution 4: Movie Ticket Price ***********/
let age = 25;
let ticketPrice;

// switch (true) {
//   case age < 18:
//     ticketPrice = 3;
//     break;
//   case age >= 18 && age <= 60:
//     ticketPrice = 10;
//     break;
//   case age > 60:
//     ticketPrice = 8;
//     break;
//   default:
//     console.log("Invalid age!");
// }

if (age < 18) {
  ticketPrice = 3;
} else if (age >= 18 && age <= 60) {
  ticketPrice = 10;
} else {
  ticketPrice = 8;
}
console.log(`The ticket price for a person aged ${age} is $${ticketPrice}.`);

/********* Solution 5: Horoscope Sign Checker **********/
let birthMonth = "April";
let zodiacSign;

switch (birthMonth) {
  case "March":
  case "April":
    zodiacSign = "Aries";
    break;
  case "April":
  case "May":
    zodiacSign = "Taurus";
    break;
  case "May":
  case "June":
    zodiacSign = "Gemini";
    break;
  case "June":
  case "July":
    zodiacSign = "Cancer";
    break;
  case "July":
  case "August":
    zodiacSign = "Leo";
    break;
  case "August":
  case "September":
    zodiacSign = "Virgo";
    break;
  case "September":
  case "October":
    zodiacSign = "Libra";
    break;
  case "October":
  case "November":
    zodiacSign = "Scorpio";
    break;
  case "November":
  case "December":
    zodiacSign = "Sagittarius";
    break;
  case "December":
  case "January":
    zodiacSign = "Capricorn";
    break;
  case "January":
  case "February":
    zodiacSign = "Aquarius";
    break;
  case "February":
  case "March":
    zodiacSign = "Pisces";
    break;
  default:
    console.log("Invalid month! Please enter a valid birth month.");
}

if (zodiacSign !== undefined) {
  console.log(
    `The zodiac sign for a person born in ${birthMonth} is ${zodiacSign}.`,
  );
}

/********* Solution 6: Triangle Type checker **********/
let sideA = 5;
let sideB = 3;
let sideC = 8;

let triangleType;

if (sideA === sideB && sideB === sideC) {
  triangleType = "Equilateral Triangle";
} else if (sideA === sideB || sideB === sideC || sideA === sideC) {
  triangleType = "Isosceles Triangle";
} else {
  triangleType = "Scalene Triangle";
}

console.log(
  `The triangle with sides ${sideA}, ${sideB}, and ${sideC} is a ${triangleType}.`,
);

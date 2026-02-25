/********* Solution 1: Odd or Even? *********/
let number = 11;

if (number % 2 === 0) {
  console.log(number + " is an even number.");
} else {
  console.log(number + " is an odd number.");
}

/********* Solution 2: Driving License Eligibility **********/
let age = 17;

if (age >= 18) {
  console.log("You are eligible for driving license!");
} else {
  console.log("You are not eligible for driving license!");
}

/********* Solution 3: Calculate CTC with Bonus *********/
let monthlySalary = 12300;
let annualSalary = monthlySalary * 12;
let bonus = annualSalary * 0.2;
let ctc = annualSalary + bonus;

console.log(`Your CTC is ${ctc} rupees per annum.`);

/******** Solution 4: Traffic Light Simulation ************/
let trafficLightColor = "Red";

if (trafficLightColor === "Red") {
  console.log("Stop!");
} else if (trafficLightColor === "Green") {
  console.log("Go!");
} else {
  console.log("Invalid traffic light color!");
}

/*********** Solution 5: Electricity Bill Calculator **********/
let unitsConsumedPerDay = 10;
let costPerUnit = 150;
let monthlyBill = unitsConsumedPerDay * costPerUnit * 30;
let annualBill = monthlyBill * 12;
let discount = annualBill * 0.2;
let discountedAnnualBill = annualBill - discount;

console.log(`My monthly electricity bill is ${monthlyBill} rupees.`);
console.log(
  `My annual electricity bill before discount is ${annualBill} rupees.`,
);
console.log(
  `My annual electricity bill after 20% discount is ${discountedAnnualBill} rupees.`,
);

/********* Solution 6: Leap Year Checker ***********/
let year = 2026;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is leap year!`);
} else {
  console.log(`${year} is not a leap year!`);
}

/********* Solution 7: Max of Three Numbers **********/
let p = 5;
let q = 10;
let r = 3;

if (p >= q && p >= r) {
  console.log(`${p} is the maximum number.`);
} else if (q >= p && q >= r) {
  console.log(`${q} is the maximum number.`);
} else {
  console.log(`${r} is the maximum number.`);
}

/********* Solution 8: Bitwise Doubling ***********/
let count = 5;
let doubledCount = count << 1; // Left shift by 1 is equivalent to multiplying by 2
console.log(`The doubled count is: ${doubledCount}`);

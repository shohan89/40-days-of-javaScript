/******* Solution 01: Generate a Pyramid Pattern */

let rows = 5;

for (let i = 1; i <= rows; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "* ";
  }
  console.log(pattern);
}

let row = 4;

for (let i = row; i >= 1; i--) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "* ";
  }
  console.log(pattern);
}

/******* Solution 02: Multiplication Table *********/
let number = 3;

for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

/******* Solution 03: Summation of Odd Numbers 1 to 500 *********/
let sum = 0;

for (let i = 1; i <= 500; i++) {
  if (i % 2 !== 0) {
    sum += i;
  }
}
console.log(`The summation of all odd numbers between 1 to 500 is: ${sum}.`);

/******* Solution 04: Skipping Multiples of 3 ********/
let limit = 20;

for (let i = 1; i <= limit; i++) {
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
}

/******* Solution 05: Reverse Digits of a Number *******/
let num = 6789;
let reversedNum = 0;

while (num > 0) {
  let digit = num % 10; // Get the last digit
  reversedNum = reversedNum * 10 + digit; // Append the digit to the reversed number
  num = Math.floor(num / 10); // remove the last digit from the original number
}
console.log(`The Reversed Number is: ${reversedNum}`);

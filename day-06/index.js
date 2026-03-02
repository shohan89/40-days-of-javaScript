/****** Solution of Problem 01: Convert Celsius to Fahrenheit ********/
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

/****** Solution of Problem 02: Find Maximum of Two Numbers ********/
function findMax(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

/****** Solution of Problem 03: check if a string is a palindrome ********/
function isPalindrome(str) {
  const cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
}

/***** Solution of Problem 04: Find Factorial of a Number ********/
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

/***** Solution of Problem 05: Count Vowels in a String *********/
function countVowels(str) {
  const vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}

/***** Solution of Problem 06: Capitalize First Letter of Each Word in a Sentence ******/
function capitalizeWords(sentence) {
  const words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}

/***** Solution of Problem 07: Use an IIFE to Print "Hello, JavaScript!" ******/
(function (word) {
  console.log("Hello, " + word + "!");
})("JavaScript");

/***** SOlution of Problem 08: Create a Simple Callback Function *********/
function greet(name, callback) {
  callback(name);
}
function printMessage(name) {
  console.log("Hello, " + name + "!");
}
greet("Alice", printMessage);

/***** Solution of Problem 09: Call Stack Execution Diagram for f1, f2, f3 ******/
// Call Stack Execution Diagram for Problem 09:
// 1. f2() is called, so it is added to the call stack.
// 2. Inside f2(), f1() is called, so f1() is added to the call stack.
// 3. f1() executes and returns, so it is removed from the call stack.
// 4. f2() continues execution and returns, so it is removed from the call stack

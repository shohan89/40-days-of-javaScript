// Declare variables for a person’s name, age, isStudent status, and favorite programming language.
let personName = "Alice";
let age = 30;
let isStudent = false;
const favoriteProgrammingLanguage = "JavaScript";

// Print the values to the console.
console.log("Name: ", personName);
console.log("Age: ", age);
console.log("Is Student: ", isStudent);
console.log("First Programming Language: ", favoriteProgrammingLanguage);

// Try reassigning values to let and const variables and observe errors.
personName = "Bob"; // This works
age = 25; // This works
isStudent = true; // This works
favoriteProgrammingLanguage = "Python"; // This will throw an error because it's a const

// Create an object and an array, assign them to new variables, modify, and observe changes.
let person = {
  name: "Alice",
  age: 30,
  isStudent: false,
};

let personCopy = person; // This creates a reference to the same object
personCopy.name = "Bob"; // Modifying personCopy also modifies person
console.log("Person: ", person); // This will show the updated name "Bob"

let numbers = [1, 2, 3];
let numbersCopy = numbers; // This creates a reference to the same array
numbersCopy.push(4); // Modifying numbersCopy also modifies numbers
console.log("Numbers: ", numbers); // This will show the updated array [1, 2, 3, 4]

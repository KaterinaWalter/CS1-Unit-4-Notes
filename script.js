// This is a SINGLE-LINE COMMENT

/* This is a MULTI-LINE COMMENT 
The code below is an example STATEMENT (instruction/command)
Every statement ends with a SEMICOLON
 */
console.log("welcome to JS!");

// VARIABLES are named storage containers for data

// DECLARE a new variable (make space)
let username;

// ASSIGN a value to an existing variable
username = "ms.walter13";

// DECLARE + ASSIGN a new variable in one line
let pokemon = "pikachu";

// See the value of a variable
console.log(username);
console.log(pokemon);

// Create a variable that holds a NUMBER
let luckyNum = 13; // numbers don't need quotes!
console.log(luckyNum);
// CHANGE the value stored in a variable (don't repeat LET)
luckyNum = 7;
console.log(luckyNum);

// MATH OPERATORS (+, -, *, /)
let age = 30;
console.log(age);
let ageInTen = age + 10;
console.log(ageInTen);
let ageDogYears = age / 7;
console.log(ageDogYears);
let zeusHumanYears = 7 * 7;
console.log(zeusHumanYears);

// PEMDAS applies when you have multiple operators
let score = 0;
score = score + 8 - 9 / 21 * (4 + 6);
console.log(score);

// Combine 2 "literal" Strings (CONCATENATION)
console.log("My age is " + "age");
// OR concatenate a literal String with a VARIABLE
console.log("My age is " + age);
console.log("My age in ten years will be " + ageInTen);
console.log("My age in dog years is" + ageDogYears);

// Can also concatenate while making variables
let user = "ms. walter";
let message = "Welcome " + user + "!";
console.log(message);


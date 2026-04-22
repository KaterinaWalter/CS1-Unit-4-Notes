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

// MATH OPERATORS (+,-,*,/)
let age = 30;
let ageInTen = age + 10;
let ageDogYears = age / 7;
let zeusHumanAge = 7 * 7;
console.log(ageDogYears);

// PEMDAS applies when you have multiple operators
let score = 0;
score = score + 8 - 16 * 2 / (7 + 12);
console.log(score);

// Combine 2 "literal" Strings (CONCATENATION)
console.log("My age is " + "age");
// or CONCATENATE (combine) a literal String with a VARIABLE
console.log("My age is " + age);

// can also concatenate while making a variable
let user = "Ms. Walter";
let message = "Welcome " + user + "!";
console.log(message);

/* FUNCTIONS:
   Reusable sets of code statements
   that perform a specific task or process
*/ 

// console.log is a FUNCTION that we've used
console.log("I just used a function!");

// DECLARE (create) your own function
function skincare() {
   // STATEMENTS (actions) to execute for this routine
   console.log("1. Cleanse");
   console.log("2. Apply toner");
   console.log("3. Moisturize");
}
// CALL the function to use it!
skincare();
skincare(); // can run the function again

// ANALOGY: Functions are like RECIPES
// Ex. of a function that needs PARAMETERS (input/"ingredients") and RETURNS a new value (output/"meal")

// if you need parameters, list some variables inside the parenthesis after the function name 
function makeSando(filling, sauce, bread) {
    let sando; // new variable to represent sandwich
    sando = filling + " and " + sauce + " on " + bread;
    return sando; // OUTPUT!
}

// must "pass in" actual arguments to use the function
let mySando = makeSando("mozzarella", "pesto", "ciabatta");
console.log(mySando);

// shortcut to see return values
console.log( makeSando("pb", "j", "bagel") );
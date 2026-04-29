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






/* FUNCTIONS:
   Reusable sets of code statements
   that perform a specific task/process/routine
 */


// console.log is a built-in FUNCTION we use
console.log("We just used a function!");

// DEFINE (create) your own function
function getReady() {
   // STATEMENTS (actions) to execute for this routine
   console.log("1. wake up");
   console.log("2. get dressed");
   console.log("3. brush your teeth");
}

// CALL (use) a function
getReady();
getReady(); // can call it as many times as you want







/* FUNCTIONS:
   Reusable sets of code statements
   that perform a specific task/process/routine
*/

// console.log is a built-in function we use
console.log("I just used a function!");

// DEFINE (create) your own function
function prepareForSleep() {
   // STATEMENTS (actions) to execute for this routine
   console.log("1. Put on PJs");
   console.log("2. Brush teeth");
   console.log("3. Read on my kindle");
}

// CALL (use) our function
prepareForSleep();
prepareForSleep(); // can call it again!









/* Selection/branching (CONDITIONALS) 
   A BOOLEAN EXPRESSION is like a QUESTION
   that has a boolean ANSWER (true/false)
*/

console.log(1 > 2); // false is the ANSWER
console.log("Is 10 less than 5?");
console.log(10 < 5); 

// Check for EQUALITY using the == operator (or ===)
console.log(1 == 1); // true!
console.log(1 != 1); // false -> asking if NOT equal
console.log("yes" == "yes"); // works for Strings!
console.log("nick" != "duncan"); 

// Strings can be compared too
console.log("Ariankjfsdkfhes" > "Carolyn");
console.log("Zebra" > "Dog"); // true, Z comes later than D
console.log("Apple" < "Banana"); // true, A comes before B
console.log("pelican" > "PELICAN"); // case matters!

// Can use comparison operators btwn VARIABLES & values too
let password = "abc123!";
console.log("8rtueishf" == password);

// IF STATEMENTS use conditionals/boolean expressions
// to make DECISIONS about which code to execute (run)
let userAge = 16;

if (userAge >= 17) {
   // code in the curly brackets only runs if TRUE!
   console.log("you are old enough for a NY license");
}

// ELSE IF BLOCKs let you test multiple options
else if (userAge == 16) {
   console.log("you can get a learners permit!");
}

// ELSE BLOCK accounts for the "otherwise..." case
else {
   console.log("too young to drive");
}


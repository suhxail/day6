// Task 1: Simple Programs todo for variables

// Declare four variables without assigning values and print them in console
let variable1 
let variable2
let variable3
let variable4

console.log("Question 1:",  variable1,variable2,variable3,variable4)

// How to get value of the variable myvar as output
var myvar = 1;
console.log("Question 2:",myvar);


// Declare variables to store your first name, last name, marital status, country and age in multiple lines

var first_name = "Mohammed";
var last_name = "Suhail";
var marital_status = "single";
var country = "India";
var age = 24;

// Declare variables to store your first name, last name, marital status, country and age in a single line
var first_name = "Mohammed", last_name = "Suhail", marital_status = "single", age = 24;


// Declare variables and assign string, boolean, undefined and null data types
var name = "Mohammed Suhail";
var isMarried = false;
var countryName 
var number = null

console.log(typeof name);
console.log(typeof isMarried)
console.log(typeof countryName)
console.log(typeof number)

// Convert the string to integer
let a = "10";
let b = parseInt(a)
console.log(typeof(b))

// Write 6 statement which provide truthy & falsey values.
const user1 = {
    name: "Jane Doe",
    email: "jane.doe@example.com"
}; // old user

const user2 = {
    name: "John Smith",
    email: "john.smith@example.com",
    loyaltyPoints: 0
}; // new user

function displayLoyaltyPoints(user) {
    if (user.loyaltyPoints !== undefined) {
        console.log(`User has ${user.loyaltyPoints} loyalty points`);
    } else {
        console.log("Field 'loyaltyPoints' not defined for user.");
    }
}

displayLoyaltyPoints(user1);
displayLoyaltyPoints(user2);


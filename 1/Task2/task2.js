// Simple Programs todo for Operators

// Square of a number
let number = 7;
let square = Math.pow(number,2);
console.log(square)


//JavaScript program to swap two variables
let a = 2;
let b = 7;

[a, b] = [b, a];

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);

// Addition of 3 numbers
let num1 = 1;
let num2 = 2;
let num3 = 3;
let sum = num1 + num2 + num3
console.log(sum)

// Celsius to Fahrenheit conversion
let celsius = 50;
let fahrenheit = (celsius * (9 / 5)) + 32;
console.log("The value of the temperature in Fahrenheit is " + fahrenheit);


// meter to miles
let meter = 1000;
let miles = meter / 1609;
console.log(miles)

// Pounds to kg
let pounds = 100;
let kg = pounds * 0.453592;
console.log(kg)

// Calculate Batting Average
let runs = 1000;
let innings = 200;
let isNotOut = 70;
let isDismissed = innings - isNotOut;
let battingAverage = runs / isDismissed
console.log(battingAverage)

// Calculate five test scores and print their average
let match1 = 123;
let match2 = 83;
let match3 = 99;
let match4 = 150;
let match5 = 77;
let sumOfScores = match1 + match2 + match3 + match4 + match5;
let average = sumOfScores / 5
console.log(average)

// Power of any number x ^ y.
let number1 = 2;
let number2 = 3;
let power = Math.pow(number1,number2)
console.log(`the result of" + ${number1} ^ ${number2} is + ${power}`)

// Calculate Simple Interest
var p = 1000; 
var r = 0.05;
var t = 2;    
var interest = (p * r * t) / 100;
console.log("Simple Interest: " + interest);

// Calculate area of an equilateral triangle
const side = 5; // in units
const area = (Math.sqrt(3) / 4) * side ** 2;
console.log(area)

// Area Of Isosceles Triangle
let baseOfIsoscelesTriangle = 30;
let heightOfIsoscelesTriangle = 12;
let areaOfIsoscelesTriangle = baseOfIsoscelesTriangle * heightOfIsoscelesTriangle / 2;
console.log(areaOfIsoscelesTriangle)

// Volume Of Sphere
let radius = 25;
let volume = 4/3 * Math.PI * radius ** 3;
console.log(volume)

// Volume Of Prism
let lengthOfPrism = 30;
let heightOfPrism = 10;
let areaOfPrism = 12;
let volumeOfPrism = lengthOfPrism * heightOfPrism * areaOfPrism / 2;
console.log(volumeOfPrism)

// Find area of a triangle
let baseOfTriangle  = 15;
let heightOfTriangle = 20;
let areaOfTriangle = baseOfTriangle * heightOfTriangle / 2;
console.log(areaOfTriangle)

// Give the Actual cost and Sold cost, Calculate Discount Of Product
 let actualCost = 100;
 let soldDiscount = 70;
 let discountOfProduct = ((actualCost - soldDiscount )/ actualCost) * 100
 console.log(discountOfProduct)

//  Given their radius of a circle and find its diameter, circumference and area.
let radiusOfCircle = 15;
let diameterOfCircle = 2 * radiusOfCircle;
let areaOfCircle = Math.PI * radiusOfCircle **2;
let circumferenceOfCircle = 2 * Math.PI * radiusOfCircle;
console.log("Diameter:", diameterOfCircle, "Area:", areaOfCircle, "Circumference:", circumferenceOfCircle )

// Given two numbers and perform all arithmetic operations.
let c = 10;
let d = 20;
let add = c + d;
let subtraction = d - c;
let multiplication = c * d;
let division = c / d;
let exponentiation = c ** d;
let modulous = c % d;
let increment = c
increment++;
let valueAfterIncrement = increment
let decrement = d;
decrement--
let valueAfterDecrement = decrement;
console.log("Addition:", add, "Subtraction:", subtraction, "Multiplication:", multiplication, "Division:", division, "Exponentiation:", exponentiation, "Modulous:", modulous, "Increment:", valueAfterIncrement, "Decrement:", valueAfterDecrement)


// Display the asterisk pattern as shown below
const n = 5;
let str = "";

for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= n; j++) {
        str +="*"
    }
    str +="\n"
}

console.log(str);

// Calculate electricity bill
const totalUnits = 720;
const ratePerUnit = 10;
const energyBill = totalUnits * ratePerUnit
console.log(energyBill)

// Program To Calculate CGPA
const totalPercentage = 560;
const totalSemester = 8;
const CGPA = (totalPercentage/totalSemester)/9.5
console.log(CGPA)




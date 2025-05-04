// ? Odd or Even

let num1 = 22;
num1 % 2 === 0 ? console.log("num1 is even") : console.log("num1 is odd");

// ? Do you have a Driving License

let age = 19;
age >= 18
  ? console.log("Eligible for a driving license")
  : console.log("Ineligible  for a driving license");

// ? Calculate CTC with a Bonus

let rawSalary = 12300;
let rawAnualSalary = rawSalary * 12;
let bonus = rawAnualSalary * 0.2;
let totalAnnualSalary = rawAnualSalary + bonus;
console.log(totalAnnualSalary);

// ? Write a program for the Traffic Light Simulation

const color = "Green";
color === "Red" ? console.log("STOP") : console.log("Go");

// ? Create an Electricity Bill Calculator

const units = 58;
const perUnitCost = 150;
const perMonthBill = units * perUnitCost;
console.log("Per month bill : " + perMonthBill + " Rupees");

const annualBill = perMonthBill * 12;
console.log("Annual Bill with 20% Discount : " + annualBill * 0.2 + " Rupees");

// ? Leap Year Checker

/*
To determine if a year is a leap year:
~ If the year is not divisible by 4, it is a common year.
~ If the year is divisible by 4 but not by 100, it is a leap year.
~ If the year is divisible by 100, then it must also be divisible by 400 to be a leap year;
   otherwise, it is a common year.
*/

const year = 2025;
(year % 4 === 0 && year % 100 != 0) || year % 400 === 0
  ? console.log(year + " is leap year")
  : console.log(year + " isn't leap year");

// ? Max of Three Numbers

const p = 10;
const q = 20;
const r = 30;

let firstMax;
let maxNum;

p > q ? (firstMax = p) : (firstMax = q);

firstMax > r ? (maxNum = firstMax) : (maxNum = r);

console.log(maxNum);

// ? Biwise Doubling

const count = 5;
/*
5 / 2 = 2 (1)
2 / 2 = 1 (0)
5 = 101

10 / 2 = 5 (0)
5 / 2 = 2 (1)
2 / 2 = 1 (0)
10 = 1010

So we just need to lefshit the binary value of 5 to double it
*/
console.log(count << 1);

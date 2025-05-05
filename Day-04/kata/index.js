// Ques : What will be the output of this code snippet and why?

let day = "Monday";

switch (day) {
  case "monday":
    console.log("It's the start of the week.");
    break;
  default:
    console.log("It's a normal day.");
}

// Answer : The day variable’s value is "Monday" (with a capital M), but the case checks for "monday" (lowercase M). Since JavaScript’s switch is case‑sensitive, "Monday" ≠ "monday", so the default branch executes and logs "It’s a normal day"

// Ques : Rajan goes to the Axis bank ATM. He enters an amount to withdraw. The ATM only allows multiples of 100. Print “Withdrawal successful” if valid, otherwise print “Invalid amount”.

let withdrawAmount = 600;

// switch (withdrawAmount) {
//   case withdrawAmount % 100 == 0:
//     console.log("Withdrawal Successful");
//     break;
//   default:
//     console.log("Invalid Amount");
// }

/*
I tried it with switch-case, but I found an interesting info. switch will compare the case with its condition using strict equality. Here, our condition which is a numeric value is comparing with a boolean as "withdrawAmount % 100 == 0" returns a boolean value, case will not be satisfied and output will be "Invalid Amount"
*/

if (withdrawAmount % 100 == 0) {
  console.log("Withdrawal Successful");
} else {
  console.log("Invalid Amount");
}

// Ques : Write a simple calculator that takes an operator (+, -, , /, %) as input, and performs the operation on two numbers. Print the output on the console.

let operator = "/";
let operand1 = 20;
let operand2 = 2;

switch (operator) {
  case "+":
    console.log(operand1 + operand2);
    break;
  case "-":
    console.log(operand1 - operand2);
    break;
  case "*":
    console.log(operand1 * operand2);
    break;
  case "/":
    console.log(operand1 / operand2);
    break;
  default:
    console.log("Invalid Operator");
}

/*
Imagine, the INOX charges ticket prices based on age:

- Children (<18 years): $3
- Adults (18 - 60 years): $10
- Seniors (60+ years): $8

Write a program that prints the ticket price based on the person’s age.
*/

let age = 45;

if (age < 18) {
  console.log("Price is $3");
} else if (age >= 18 && age <= 60) {
  console.log("Price is $10");
} else if (age > 60) {
  console.log("Price is $8");
} else {
  console.log("Invalid Age");
}

// Ques: Write a program that, given a person’s birth month, prints the corresponding financial quarter—“Q1”, “Q2”, “Q3” or “Q4”—using a switch (or equivalent) without any if‑else, where January–March → Q1, April–June → Q2, July–September → Q3 and October–December → Q4.

let bMonth = "April";

switch (bMonth) {
  case "January":
  case "February":
  case "March":
    console.log("Q1");
    break;
  case "April":
  case "May":
  case "June":
    console.log("Q2");
    break;
  case "July":
  case "August":
  case "September":
    console.log("Q3");
    break;
  case "October":
  case "November":
  case "December":
    console.log("Q4");
    break;
  default:
    console.log("Invalid Months");
}

/*
A triangle has 3 sides. A Triangle type is determined by its sides:

- All sides equal is called, Equilateral Triangle.
- Two sides equal is called, Isosceles Triangle.
- All sides different is called, Scalene Triangle.

Take the sides of a triangle as input and write a program to determine the triangle type. Change the inputs everytime manually to see if the output changes correctly.
*/

let side1 = 50;
let side2 = 30;
let side3 = 10;

if (side1 == side2 && side2 == side3 && side1 == side3) {
  console.log("Equilateral");
} else if (side1 == side2 || side2 == side3 || side1 == side3) {
  console.log("Isosceles");
} else if (side1 != side2 && side2 != side3 && side1 != side3) {
  console.log("Scalene");
} else {
  console.log("Invalid Input");
}

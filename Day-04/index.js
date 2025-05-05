console.log("Day 04");

/*
Covered Topics :

The Control Flow
if-else and Branching
Multiple if-else
Nesting if-else
Switch-Case
if-else vs switch-case
*/

let catchingBus = true;

if (catchingBus) {
  console.log("I will reach home on time");
} else {
  console.log("I will be late to react");
}

/*
catchingBus
  ? console.log("I will reach home on time")
  : console.log("I will be late to react");
*/

let age = 8;

if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

// Let's build a grading system
// If score is >= 90, Grade A
// If score is >= 80, Grade B
// If score is >= 70, Grade C
// Fail

let score = 76;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 80) {
  console.log("Grade B");
} else if (score >= 70) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

let x = 0;

if (x === 0) {
  console.log(0);
} else if (x >= 0) {
  console.log("Greater than 0");
} else if (x <= 0) {
  console.log("Lesser than 0");
}

const condition = false;
const innterCondition = false;

if (condition) {
  console.log("Outer if");
  if (innterCondition) {
    console.log("Inner if");
  } else {
    console.log("Inner else");
  }
} else {
  console.log("Outer else");
}

let position = 10;

switch (position) {
  case 1:
    console.log("Print 1");
    break;
  case 2:
    console.log("Print 2");
    break;
  case 3:
    console.log("Print 3");
    break;
  case 4:
    console.log("Print 4");
    break;
  default:
    console.log("Nothing matched");
}

let day = 4;

switch (day) {
  case 1:
    console.log("Saturday");
    break;
  case 2:
    console.log("Sunday");
    break;
  case 3:
    console.log("Monday");
    break;
  case 4:
    console.log("Tuesday");
    break;
  case 5:
    console.log("Wednesday");
    break;
  case 6:
    console.log("Thursday");
    break;
  case 7:
    console.log("Friday");
    break;
  default:
    console.log("Invalid day number");
}

let name = "Google";

switch (name) {
  case "tapaScript":
    console.log("Teaching 40 days of JS");
    break;
  case "google":
    console.log("Search engine");
    break;
  default:
    console.log("You are neither google, nor tapaScript");
}

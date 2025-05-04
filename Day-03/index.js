console.log("Day 03");

/*
Covered Topics:
- Operands, Operators, Expressions
- Different Types of Operators
- Arithmetic Operators
- Assignment Operators
- Comparison Operators
- Logical Operators
- Conditional (ternary) Operator
- Bitwise Operators
- Relational Operators
- Grouping and Precedence
- typeof Operator
- instanceof Operator
- Task Assignments
*/

// Operators: symbols like +, -, *, /
// Operands: values on which operators act (e.g., in x + y, x and y are operands)
// Expression: a combination of operands and operators (e.g., x = 2)
// Evaluating Expression: e.g., 3 + 4 equals 7

// ----- Arithmetic Operators -----
console.log("**** Arithmetic Operators ****");

let a = 10;
let b = 20;

let f_name = "sayeed";
let l_name = "mahmoud";

// Added a space between names for readability
console.log(f_name + " " + l_name);

console.log(a + b); // 30
console.log(a - b); // -10
console.log(b - a); // 10
console.log(a * b); // 200
console.log(a / b); // 0.5
console.log(a ** b); // Exponential operator
console.log(a % b); // Remainder

let count = 5;
console.log(count++); // Post-increment: returns count then increments it (count becomes 6)
console.log(count); // 6

console.log(++count); // Pre-increment: increments count then returns it (count becomes 7)

// ----- Assignment Operators -----
console.log("**** Assignment Operators ****");

let x = 10;
x += 5; // x = x + 5  => 15
x -= 3; // x = x - 3  => 12
x *= 2; // x = x * 2  => 24
x /= 5; // x = x / 5  => 4.8

console.log(x);

// ----- Comparison Operators -----
console.log("**** Comparison Operators ****");

// == : loose equality operator (performs type coercion)
// === : strict equality operator (checks value and type)
// != : loose inequality operator
// !== : strict inequality operator

console.log(0 == false); // true (type coercion)
console.log(0 === false); // false (different types)

/*
Note on strict equality (===):
- If operands are of different types, the result is false.
- null == null and undefined == undefined return true.
- If any operand is NaN, the comparison returns false.
*/
console.log(null == null); // true
console.log(undefined == undefined); // true

let obj1 = { name: "evrenos" };
let obj2 = { name: "evrenos" };

console.log(obj1 === obj2); // false (different object references)
console.log(obj1 !== obj2); // true

// Other comparison operators: >, <, <=, >=

// ----- Logical Operators -----
console.log("**** Logical Operators ****");

// Logical AND (&&), Logical OR (||), Nullish Coalescing (??), Logical NOT (!)

// For &&: returns the first falsy operand; if none, returns the last operand.
console.log(false && false); // false
console.log(true && false); // false
console.log(true && true); // true
console.log(false && true); // false
console.log("Cow" && "Horse"); // "Horse"
console.log(4 > 5 && 4 === 6); // false

// For ||: returns the first truthy operand; if none, returns the last operand.
console.log(false || false); // false
console.log(true || false); // true
console.log(true || true); // true
console.log(false || true); // true
console.log("Cow" || "Horse"); // "Cow" (since "Cow" is truthy)

console.log(!true); // false
console.log(!false); // true

// Nullish Coalescing Operator (??):
// Returns the right-hand operand if the left-hand operand is null or undefined.
let a1 = null ?? 1; // 1
let a2 = undefined ?? 3; // 3
const a3 = false ?? "tapaScript"; // false (because false is not null/undefined)
const a4 = 0 ?? "tapas"; // 0

// ----- Conditional (Ternary) Operator -----
console.log("Conditional (ternary) operator");

let age = 23;
console.log(age >= 60 ? "Senior Citizen" : "Young Citizen");

// ----- Bitwise Operators -----
console.log("**** Bitwise Operators ****");

/*
Definition:
Bitwise operators work on the binary representations of numbers.
They perform operations at the bit level and are useful for low-level data manipulation,
such as setting flags, masking, or performing efficient arithmetic operations.

Bitwise Operators and Their Rules:
&  : Bitwise AND - Returns 1 for each bit position where both corresponding bits are 1.
|  : Bitwise OR  - Returns 1 if at least one corresponding bit is 1.
^  : Bitwise XOR - Returns 1 if the corresponding bits are different.
~  : Bitwise NOT - Inverts all bits (0 becomes 1 and 1 becomes 0).
<< : Left Shift  - Shifts the bits to the left by a specified number of positions, filling with zeros.
>> : Right Shift - Shifts the bits to the right by a specified number of positions.
*/

// Examples:
console.log("15 & 9 =", 15 & 9); // 15 (1111) & 9 (1001) = 9 (1001)
console.log("15 | 9 =", 15 | 9); // 15 (1111) | 9 (1001) = 15 (1111)
console.log("15 ^ 9 =", 15 ^ 9); // 15 (1111) ^ 9 (1001) = 6 (0110)
console.log("~15 =", ~15); // Bitwise NOT inverts the bits of 15
console.log("9 << 2 =", 9 << 2); // Left shift: 9 (1001) becomes 36 (100100)
console.log("9 >> 2 =", 9 >> 2); // Right shift: 9 (1001) becomes 2 (0010)
// Explanation: Right shifting 9 (binary 1001) by 2 positions gives 10 (binary), which is 2 in decimal.

// ----- Relational Operators -----
console.log("**** Relational Operators ****");
// The 'in' keyword checks if a property exists in an object (its use is sometimes discouraged).

// ----- Grouping -----
console.log("**** Grouping ****");
// Parentheses are used to group parts of an expression to control the order of evaluation (precedence).

let p = 1;
let q = 2;
let r = 3;

console.log(p + q * r); // 1 + (2 * 3) = 7
console.log((p + q) * r); // (1 + 2) * 3 = 9

// ----- typeof Operator -----
console.log("**** typeof Operator ****");
// Returns a string indicating the type of the unevaluated operand.
console.log(typeof "Sayeed"); // "string"
console.log(typeof false); // "boolean"

let size = 100;
console.log(typeof size); // "number"

const numbers = [1, 2, 3, 4];
console.log(typeof numbers); // "object" (arrays are objects in JavaScript)

// Special case:
console.log(typeof null); // "object" (a known JavaScript quirk)

// ----- instanceof Operator -----
console.log("**** instanceof Operator ****");
/*
The instanceof operator tests whether an object has in its prototype chain the prototype property of a constructor.
For example, if you create a Car constructor and instantiate objects like bmw or audi, then:
- audi instanceof Car returns true.
- A non-object compared to Car would return false.
*/

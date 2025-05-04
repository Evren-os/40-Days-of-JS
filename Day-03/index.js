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
console.log(a % b); // Remainder / Modulus

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

console.log(obj1 === obj2); // false
console.log(obj1 !== obj2); // true

/*
  Objects in JavaScript are compared by reference.
  Even though obj1 and obj2 have identical properties and values,
  they live at different memory locations.
  === checks “do these references point to the same object?”
  Since they don’t, obj1 === obj2 is false (and obj1 !== obj2 is true).
*/

// Other comparison operators: >, <, <=, >=

// ----- Logical Operators -----
console.log("**** Logical Operators ****");

// Logical AND (&&), Logical OR (||), Nullish Coalescing (??), Logical NOT (!)

/* Logical AND (&&) operator in JavaScript:

1. Evaluate the left operand:
   • If it is falsy (false, 0, "", null, undefined, or NaN), return it immediately.
   • Otherwise, evaluate and return the right operand.

2. So for booleans:
   • true &&  true → true   (both truthy, so returns the second: true)
   • true &&  false → false (first is truthy, returns second: false)
   • false && true  → false (first is falsy, returns first: false)
   • false && false → false (first is falsy, returns first: false)

3. And for other values:
   • "Cow" && "Horse" → "Horse" (first is truthy, returns second)
   • ""    && "Horse" → ""      (empty string is falsy, returns first)
*/
// Examples:
console.log(false && false); // false  (first is falsy → returns false)
console.log(true && false); // false  (first is truthy → returns second: false)
console.log(true && true); // true   (first truthy → returns second: true)
console.log(false && true); // false  (first is falsy → returns false)
console.log("Cow" && "Horse"); // "Horse" (first truthy → returns second)
console.log(4 > 5 && 4 === 6); // false   (first is false → returns false)

/* Logical OR (||) operator in JavaScript:

1. Evaluate the left operand:
   • If it is truthy (anything except false, 0, "", null, undefined, NaN), return it immediately.
   • Otherwise (it’s falsy), evaluate and return the right operand.

2. So for booleans:
   • true  ||  true  → true   (first is truthy → returns first)
   • true  || false  → true   (first is truthy → returns first)
   • false || true   → true   (first is falsy → returns second: true)
   • false || false  → false  (first is falsy → returns second: false)

3. And for other values:
   • "Cow" || "Horse" → "Cow"  (first is truthy → returns first)
   • ""     || "Horse" → "Horse" (empty string is falsy → returns second)
*/
// Examples:
console.log(false || false); // false
console.log(true || false); // true
console.log(true || true); // true
console.log(false || true); // true
console.log("Cow" || "Horse"); // "Cow"

/* Logical NOT (!) operator in JavaScript:

1. Coerces its operand to a boolean value, then returns the opposite boolean.
   • ! truthyValue   → false
   • ! falsyValue    → true

2. Common use:
   • Double negation (the !! trick) is simply applying the logical NOT operator twice (!(!x)) to coerce any value into a true Boolean (true or false)
   • Double negation (!!value) to coerce any value to a true boolean.
*/
// Examples:
console.log(!true); // false  (true → false)
console.log(!false); // true   (false → true)
console.log(!0); // true   (0 is falsy → true)
console.log(!!"Cow"); // true   (coerces "Cow" to boolean true)

/* Nullish Coalescing (??) operator in JavaScript:

1. Evaluate the left operand:
   • If it is neither null nor undefined, return it.
   • Otherwise (it is null or undefined), return the right operand.

2. Differs from || by only checking for null/undefined, not all falsy values.
*/
// Examples:
let a1 = null ?? 1; // 1     (left is null → returns right)
let a2 = undefined ?? 3; // 3     (left is undefined → returns right)
const a3 = false ?? "JavaScript"; // false (false is not null/undefined)
const a4 = 0 ?? "foo"; // 0     (0 is not null/undefined)

// ----- Conditional (Ternary) Operator -----
console.log("Conditional (ternary) operator");

let age = 23;
console.log(age >= 60 ? "Senior Citizen" : "Young Citizen");

/* Conditional (ternary) operator syntax:
  condition ? valueIfTrue : valueIfFalse

- Evaluates `condition` (any expression).
- If truthy, returns `valueIfTrue`; otherwise returns `valueIfFalse`.
- It’s an expression (returns a value), not a statement.
- Use parentheses around complex expressions for readability.
*/

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

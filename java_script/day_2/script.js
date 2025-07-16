// operators
// This file contains examples of various JavaScript operators
/*
1. Arithmetic Operators
   - Addition: +
   - Subtraction: -
   - Multiplication: *
   - Division: /
   - Modulus: %

2. Assignment Operators
   - Assignment: =
   - Add and Assign: +=
   - Subtract and Assign: -=
   - Multiply and Assign: *=
   - Divide and Assign: /=

3. Comparison Operators
   - Equal to: ==
   - Not equal to: !=
   - Strict equal to: ===
   - Strict not equal to: !==
   - Greater than: >
   - Less than: <

4. Logical Operators
   - AND: &&
   - OR: ||
   - NOT: !

5. Bitwise Operators
   - AND: &
   - OR: |
   - XOR: ^
   - NOT: ~
   - Left Shift: <<
   - Right Shift: >>

6. Ternary Operator
   - condition ? expr1 : expr2
*/

// Example usage of operators
// addition (+)
let num0 = 1;
let num1 = 2;
let num3 = num0 + num1 ;
console.log(num3);

// string concatenation

let str0 = ("hello");
let str1 = ("World!");
let str2 = str0 + str1; // out "helloWorld!"
let str3 = str0 + " " + str1; // out "hello World!"
console.log(str2);
console.log(str3);

// subtraction (-)

let num4 = 5;
let num5 = 3;
let num6 = num4 - num5;
console.log(num6);

// multiplication (*)

let num7 = 4;
let num8 = 2;
let num9 = num7 * num8;
console.log(num9);

// division (/)

let num10 = 8;
let num11 = 2;
let num12 = num10 / num11;
console.log(num12);

// remainder (%)
// modulus operator returns the remainder of a division operation
// e.g., 5 % 2 returns 1 because 5 divided by 2
// gives a quotient of 2 and a remainder of 1
// 5 % 2 = 1

let num13 = 5;
let num14 = 2;
let num15 = num13 % num14;
console.log(num15);

// Exponentiation (**)
// The exponentiation operator raises the left operand to the power of the right operand
// e.g., 2 ** 3 returns 8 because 2 raised to the power     

let num16 = 4;
let num17 = 3;
let num18 = num16 ** num17;
console.log(num18);

// Increment and decrement

// ++
let num19 = 3;
let num20 = ++num19;
console.log(num20);
console.log(num19);

// --
let num21 = 3;
let num22 = num21--;
console.log(num22);
console.log(num21);

// Assignment operators
let num23 = ("hello World");
console.log(num23);

let num24 = 5;
num24 += 3;
console.log(num24);  // prints 8


let num25 = 20;
num25 -= 5;
console.log(num25); //prints 15


let num26 = 4;
num26 *= 2;
console.log(num26); //prints 8


let num27 = 3;
num27 /= 1;
console.log(num27); //prints 3


let num28 = 13;
num28 %= 2;
console.log(num28); //prints 1

// Comparison operators

let num29 = 5;
let num30 = "5";
let num31 = 5;
let num32 = 6;
console.log(num29 == num30); // out true
console.log(num29 === num30); //out false

console.log("hello World!");

console.log(num29 != num30); //out false
console.log(num29 !== num30); //out true

console.log("hello World!");

console.log(num29 > num31); //out  false
console.log(num29 < num32); //out true

console.log("hello han Lin Ko");

console.log(num29 > num30); //out false
console.log(num29 < num30); //out false

console.log(num29 >= num32);
console.log(num29 <= num30);

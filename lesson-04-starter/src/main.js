console.log('Lesson 04 starter loaded');

// Instructor TODO:
// 1. Simple if
const x = 5;
if (x > 0) {
  console.log('x is +ve');
}
// 2. if-else
// == and === are both comparison operators
// === strictly checks for value with correct data type
// '2' == 2 is true but '2' === 2 is false
if (x % 2 === 0) {
  console.log('x is even');
} else {
  console.log('x is odd');
}
/*
const THIS_IS_A_CONSTANT //use screaming snake case for const
*/

// 3. Nested if-else
if (x > 10) {
  console.log('x is greater than 10');
} else if (x < 10) {
  console.log('x is less than 10');
} else {
  console.log('x is 10');
}
// 4. while loop
let count = 3;
while (count > 0) { // runs code while condition is true
  console.log(`Countdown: ${count}`);
  count--;
}
let counter = 10;
while (counter !== 0) {
  console.log(counter);
  counter--;
}

// 5. do-while loop
// 6. for loop

// Student TODO:
// 7. Snippet with bugs for debugging practice
// Snippet with bugs for debugging practice - uncomment when ready
/*
const num = 10;

if (num < 5) {
  console.log('num is greater than 5');
} else {
  console.log('num is 5 or less');
}

let k = 0;
while (k < 3) {
  k + 1;
	console.log(k);
}
*/

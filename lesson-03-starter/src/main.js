var n;
console.log('Lesson 03 starter loaded');//semicolons indicate the end of the line.
console.log('yada yada');
console.log('something');
console.log('what');
const greeting = "Hello, World!";//constant string
let count = 3.0;//let as float
var name = true;//var as Boolean var is for functions
console.log(n);
console.log(x);
n = 1;
var x = 1;
var y = 10;
console.log(n);
console.log(x);
//let and var can both be changed
//variables defined with var exicute the following:
//var n at top
//n = 1 at line where var n = 1; is commited this is called hoisting.
console.log(name,count,greeting);//comma gives a space, plus does same as python.
console.log(typeof 2);
//alert("Welcome to the demo");
//const answer = prompt("name?");
//console.log(answer);
//const continueDemo = confirm(`Hi ${answer}, good to go?`);
//console.log(`user chose to confirm: ${continueDemo}`);
const strNumber = '42';
const parsedNumber = parseInt(strNumber,10);
console.log(`Type of strNumber: ${typeof strNumber}\nType of parsedNumber: ${typeof parsedNumber}`);
const numberBackToString = parsedNumber.toString();
console.log(`parsedNumber back to string: ${typeof numberBackToString}`);
// Student TODO: 
// Prompt the user for their name and age
// Log a greeting message using the provided name and age
console.log(`${x} + ${y} = ${x + y}`);
x = x + 1;
x++;
x--;
x = x - 1;
console.log(x);
x *= 2;
console.log(x);
//composite data types
//array
const fruits = ["apple","banana","cherry"];
const number = [1,2,3,4,5,6,7,8,9,0];
const mix = [1,"name",true];
//object (like a dictionary)
//comprises of key value pairs
const person = {1:"name",2:"age",3:"height"}//curly bracketys identify an object with colons : (like a dict)
//both keys and values can have any data type(primitive and composite)
const PERSON = {
    "name":"Suneel",
    "age":27,
    "height":"6 foot",
} // formated like so:    key:value
const human = { 
    name: 'Suneel',
    age: 27
}
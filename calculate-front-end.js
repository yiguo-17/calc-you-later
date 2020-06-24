/*********************************************
 * YOUR CODE HERE!                           *
 ********************************************/
const calculate = require('./calculate-back-end.js');
const num2 = String(process.argv.slice(-1));
let num1 = '';
let operation= '';
if(isNaN(process.argv.slice(-3,-2))){
  num1 = String(process.argv.slice(-4,-3));
  operation = (process.argv.slice(-3,-1)).join(' ')}else{
    num1 = String(process.argv.slice(-3,-2));
    operation = String(process.argv.slice(-2,-1));}
console.log(calculate(num1, num2, operation));





/******************************************
 * OUR CODE BELOW--DON'T TOUCH!           *
 *****************************************/

function getInput(i) {
  return process.argv[i + 2];
}

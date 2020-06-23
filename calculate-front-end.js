/*********************************************
 * YOUR CODE HERE!                           *
 ********************************************/
const calculate = require('./calculate-back-end.js');
const num1 = getInput(0);
const num2 = getInput(2);
const operation = getInput(1);
console.log(calculate(num1, num2, operation));





/******************************************
 * OUR CODE BELOW--DON'T TOUCH!           *
 *****************************************/

function getInput(i) {
  return process.argv[i + 2];
}

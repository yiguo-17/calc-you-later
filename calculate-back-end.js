/******************
 * YOUR CODE HERE *
 ******************/

//  Takes in two numbers and a string representing an operation.
// function calculate(num1: number, num2: number, operation: string): number
function calculate(num1, num2, operation) {
  num1 = Number(num1);
  num2 = Number(num2);

  //The variables are not at all necessary, but they do make the code more readable.

  const isAddition = operation === '+' || operation === 'plus' || operation === 'added to';
  // 'subtracted from' is the wrong direction, and future tests will reflect this.
  // Management apologizes for the error and any subsequent mishaps that occurred from this faulty subtraction.
  const isSubtraction = operation === '-' || operation === 'minus' || operation === 'subtracted from';
  const isMultiplication = operation.toLowerCase === 'x' || operation === 'times' || operation === 'multiplied by';
  const isDivision = operation === '/' || operation === 'divided by';
  const isModulus = operation === '%' || operation === 'modulus' || operation === 'mod';

  // Without the variables above, the if/else chain is enough by itself.
  // But then the boolean checks get very long.
  // Up to you!
  if (isAddition) {
    return num1 + num2;
  } else if (isSubtraction) {
    return num1 - num2;
  } else if (isMultiplication) {
    return num1 * num2;
  } else if (isDivision) {
    return num1 / num2;
  } else if (isModulus) {
    return num1 % num2;
  } else {
    return `Sorry, that's not a mathematical operation!`
  }

  /* Or, instead of using the if/else chain above, we can use
   * a switch, preferably with fall through to save code.
   * The switch's simplicity means we don't have to save our
   * boolean checks into variables, which was mostly to avoid
   * long compound if checks. */

  // switch(operation.toLowerCase()) {
  //   case 'added to':
  //   case 'plus':
  //   case '+':
  //     return num1 + num2;
  // 
  //   case '-':
  //   case 'minus':
  //   case 'subtracted from':
  //     return num1 - num2;
  // 
  //   case 'x':
  //   case 'times':
  //   case 'multiplied by':
  //     return num1 * num2;
  // 
  //   case '/':
  //   case 'divided by':
  //     return num1 / num2;
  // 
  //   case '%':
  //   case 'mod':
  //   case 'modulus':
  //     return num1 % num2;
  // 
  //   default:
  //     return `Sorry, that's not a mathematical operation!`;
  // }
}


/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof calculate === 'undefined') {
  calculate = undefined;
}

module.exports = calculate;

/*5. GCD (Greatest Common Divisor): Write a program to find the greatest common divisor of two numbers. (Optional: can be advanced for some) */

import inquirer from 'inquirer';
import { gcd } from './utility.js';

const validateNumber = input => {
  if (input >= 1) {
    return true;
  } else {
    return 'Error. Both numbers have to be greater than or equal to 0.';
  }
};

let firstNumber = await inquirer.prompt([
  {
    type: 'number',
    name: 'number',
    message:
      'Enter the first number for which you would like to know the Greatest Common Divisor: ',
    validate: validateNumber
  }
]);

let secondNumber = await inquirer.prompt([
  {
    type: 'number',
    name: 'number',
    message: 'Enter the second number now: ',
    validate: validateNumber
  }
]);

const result = gcd(firstNumber.number, secondNumber.number);

console.log("the GCD of", firstNumber.number, "and", secondNumber.number, "is:", result);
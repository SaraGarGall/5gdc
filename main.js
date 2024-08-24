/*5. GCD (Greatest Common Divisor): Write a program to find the greatest common divisor of two numbers. (Optional: can be advanced for some) */

import inquirer from 'inquirer';
import { gcd } from './utility.js';

let firstNumber = await inquirer.prompt([
  {
    type: 'number',
    name: 'number',
    message:
      'Enter the first number for which you would like to know the Greatest Common Divisor: '
  }
]);

let secondNumber = await inquirer.prompt([
  {
    type: 'number',
    name: 'number',
    message: 'Enter the second number now: '
  }
]);

const result = gcd(firstNumber.number, secondNumber.number);

console.log("the GCD of", firstNumber, "and", secondNumber, "is:", result);
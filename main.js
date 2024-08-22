/*5. GCD (Greatest Common Divisor): Write a program to find the greatest common divisor of two numbers. (Optional: can be advanced for some) */

import inquirer from 'inquirer';
import { integerFactorization } from './utility.js';

let answers = await inquirer.prompt([
  {
    type: 'number',
    name: 'number',
    message: 'Give me a number:'
  }
]);

const result = integerFactorization(answers.number);

console.log(result)
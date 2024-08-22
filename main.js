/*5. GCD (Greatest Common Divisor): Write a program to find the greatest common divisor of two numbers. (Optional: can be advanced for some) */

const prompt = require('prompt-sync')();
const utility = require('./utility');

let firstNumber = prompt(
  'Enter the first number for which you would like to know the Greatest Common Divisor: '
);

let secondNumber = prompt('Enter the second number now: ');

utility.primeNumber(firstNumber, secondNumber);
utility.gdc(firstNumber, secondNumber);

/*5. GCD (Greatest Common Divisor): Write a program to find the greatest common divisor of two numbers. (Optional: can be advanced for some) */

const prompt = require('prompt-sync')();
const utility = require('./utility');

let numbersRequested = prompt(
  'Enter the numbers for which you would like to know the Greatest Common Divisor: '
); // Add the way to differenciate the two numbers.


utility.gdc(numbersRequested);
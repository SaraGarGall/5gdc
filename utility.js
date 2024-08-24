export function primeNumber(n) {
  let result;

  for (let i = 2; i < n; i++) {
    result = n % i != 0 ? true : false;
    if (result == false) {
      return result;
    }
  }
  return result;
}

export function integerFactorization(n) {
  let arrayOfDivisor = [];
  let quotient = n;

  for (let i = 2; i <= n; i++) {
    if (primeNumber(n)) {
      arrayOfDivisor.push(n);
    } else {
        if (quotient % i == 0) {
          quotient = quotient / i;
          arrayOfDivisor.push(i);
          i--;
        } else {
          quotient = quotient;
          continue;
      }
    }
  }
  return arrayOfDivisor;
}

export function gcd(firstNumber, secondNumber) {
  let arrayOne = integerFactorization(firstNumber);
  let arrayTwo = integerFactorization(secondNumber);
  let arrayOfCommons = [];
  let gcdResult = 1;

  for(let i = 0; i < arrayOne.length; i++){
    let arrayOneEl = arrayOne[i];

    for (let j = 0; j < arrayTwo.length; j++) {
      let arrayTwoEl = arrayTwo[j];

      if(arrayOneEl == arrayTwoEl){
        arrayOfCommons.push(arrayTwoEl); 
        arrayTwo.shift(); //no estoy segura de esto
        break;
      } else {
        continue;
      }
    }
  }

    for(let i = 0; i < arrayOfCommons.length; i++){
      gcdResult = gcdResult * arrayOfCommons[i];
    }

  return gcdResult;
}
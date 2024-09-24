export function primeNumber(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

export function integerFactorization(n) {
  let arrayOfDivisor = [];
  let quotient = n;
  
  if (primeNumber(n)) {
    arrayOfDivisor.push(n);
    return arrayOfDivisor;
  }

  for (let i = 2; i <= n; i++) {
    if (quotient % i == 0) {
      quotient = quotient / i;
      arrayOfDivisor.push(i);
      i--;
    }
  }
  return arrayOfDivisor;
}

export function gcd(firstNumber, secondNumber) {
  let arrayOne = integerFactorization(firstNumber);
  let arrayTwo = integerFactorization(secondNumber);
  let arrayOfCommons = [];
  let gcdResult = 1;

  for (let i = 0; i < arrayOne.length; i++) {
    let arrayOneEl = arrayOne[i];

    for (let j = 0; j < arrayTwo.length; j++) {
      let arrayTwoEl = arrayTwo[j];

      if (arrayOneEl == arrayTwoEl) {
        arrayOfCommons.push(arrayTwoEl);
        arrayTwo.shift();
        break;
      }
    }
  }

  for (let i = 0; i < arrayOfCommons.length; i++) {
    gcdResult = gcdResult * arrayOfCommons[i];
  }

  return gcdResult;
}

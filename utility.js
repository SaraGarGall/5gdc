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
  let integersOfFirstNumber = integerFactorization(firstNumber);
  let integersOfSecondNumber = integerFactorization(secondNumber);

  console.log(integersOfFirstNumber);
  console.log(integersOfSecondNumber);

  //Ahora tendria que elegir los divisores que se repiten el menor numero de veces (quizas mirar lo de reduce)
}

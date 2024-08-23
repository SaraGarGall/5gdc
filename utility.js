export function primeNumber(n) {
  //averiguar si el numero es primo o no
  //numero primo es el que no se puede dividir por otro numero, solo por si mismo(n) y uno
  //dividir entre los numeros >1 y <n, si da de resto 0, entonces es primo
  let result;

  for (let i = 2; i < n; i++) {
    result = n % i != 0 ? true : false;
    if (result == false) {
      return result;
    }
  }
  //console.log(result);
  return result;
}

//SEGUIR REVISANDO ESTA FUNCION, PORQUE ESTA MAL

export function integerFactorization(n) {
  let arrayOfDivisor = [];
  let quotient = n;

  for (let i = 2; i <= n; i++) {
    if (primeNumber(n)) {
      arrayOfDivisor.push(n);
    } else {
      /*quotient =
        quotient % i == 0 ? quotient / i && arrayOfDivisor.push(i) : quotient;*/
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

export function gdc(firstNumber, secondNumber) {
  let integersOfFirstNumber = integerFactorization(firstNumber);
  let integersOfSecondNumber = integerFactorization(secondNumber);

  console.log(integersOfFirstNumber);
  console.log(integersOfSecondNumber);

  //Ahora tendria que elegir los divisores que se repiten el menor numero de veces (quizas mirar lo de reduce)
}

// El for loop tendria que inicializarse cada evz que el cociente es diferente
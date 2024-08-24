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

//error found in program. It does not return the correct number
export function gcd(firstNumber, secondNumber) {
  let arrayOne = integerFactorization(firstNumber);
  let arrayTwo = integerFactorization(secondNumber);
  let arrayOfCommons = [];
  let gcdResult = 1;

  console.log("arrayOne is:", arrayOne);
  console.log('arrayTwo is:', arrayTwo);

  for(let i = 0; i < arrayOne.length; i++){
    let arrayOneEl = arrayOne[i];

    console.log('arrayOneEl is:', arrayOneEl);

    for (let j = 0; j < arrayTwo.length; j++) {
      let arrayTwoEl = arrayTwo[j];

      console.log('arrayTwoEl is:', arrayTwoEl);

      if(arrayOneEl == arrayTwoEl){
        arrayOfCommons.push(arrayTwoEl);
        break;
        console.log('arrayOfCommons inside the loop is:', arrayOfCommons);
      } else {
        continue;
      }
    }
  }

    for(let i = 0; i < arrayOfCommons.length; i++){
      gcdResult = gcdResult * arrayOfCommons[i];
      console.log("gcdResult inside the loop is:", gcdResult);
    }
console.log("arrayOfCommons is:", arrayOfCommons)
return gcdResult;
}

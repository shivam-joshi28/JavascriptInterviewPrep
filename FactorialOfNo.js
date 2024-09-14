//function to calculate factorial of a given number
//factorial is multiplication of all positive integer from 1to given no

function factorialCal(number) {
  let factorial = 1;
  for (let i = number; i > 0; i--) {
    factorial = factorial * i;
  }
  return factorial;
}

console.log(factorialCal(5));

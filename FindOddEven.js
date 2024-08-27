// function that tells if given no. is even or odd
//return even if no. is even and odd if no. is odd

function findOddEven(number) {
  const remainder = number % 2;
  if (remainder === 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(findOddEven(17));

function sumOfDigit(number) {
  let sum = 0;
  let num = number;
  while (num > 0) {
    let lastdigit = num % 10;
    num = Math.floor(num / 10);

    sum += lastdigit;
  }

  return sum;
}
console.log(sumOfDigit(123));

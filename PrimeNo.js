function isprime(number) {
  for (i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isprime(10));

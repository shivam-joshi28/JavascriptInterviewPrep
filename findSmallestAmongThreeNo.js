// function that finds prints smallest no. among three given no.
// input = 3 no.
// return smallest no.

function smallestOfThree(num1, num2, num3) {
  if (num1 < num2 && num1 < num3) {
    return num1;
  } else if (num2 < num1 && num2 < num3) {
    return num2;
  } else if (num3 < num1 && num3 < num2) {
    return num3;
  }
}
console.log(smallestOfThree(15, 10, 8));

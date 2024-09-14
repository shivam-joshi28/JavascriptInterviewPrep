// find missing element in an array

let arr = [1, 2, 3, 4, 6, 7, 8];

let n = 8;

function missingElement(arr, n) {
  let sum = 0;

  for (let i = 0; i < n - 1; i++) {
    sum += arr[i];
  }

  let expectedSum = (n * (n + 1)) / 2; //sum of Natural no.
  return expectedSum - sum;
}

console.log("Missing NO. is :" + missingElement(arr, n));

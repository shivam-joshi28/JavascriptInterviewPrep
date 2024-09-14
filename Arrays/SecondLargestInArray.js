// find second largest element in array
let arr = [12, 35, 1, 10, 34, 1];
let size = arr.length;

let largest = -Infinity;
let secLargest = -Infinity;

function secondLargestElement(arr, size) {
  for (let i = 0; i < size; i++) {
    if (arr[i] > largest) {
      secLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secLargest && arr[i] != largest) {
      secLargest = arr[i];
    }
  }
  return secLargest;
}

console.log("Second Largest element : " + secondLargestElement(arr, size));

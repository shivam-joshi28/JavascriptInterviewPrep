let arr = [1, 2, 3, 4, 5, 6];

let start = 0;

let end = arr.length - 1;

function reverseArray(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}
function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
reverseArray(arr, start, end);
console.log(printArray(arr));

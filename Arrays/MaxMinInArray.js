// max min
// [20,1,5,10,8,7,9]

let arr = [20, 1, 5, 10, 8, 7, 9];

let max = -Infinity;
let min = +Infinity;

for (let i = 0; i <= arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  } else if (arr[i] < min) {
    min = arr[i];
  }
}
console.log("max element is : " + max);
console.log("min element is : " + min);

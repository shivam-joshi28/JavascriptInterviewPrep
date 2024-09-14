// second smallest element in array
// 12,25,8,55,10,33,17,11

let arr = [12, 25, 8, 55, 10, 33, 17, 11];
function secondSmallest(arr) {
  let smallest = +Infinity;
  let secSmallest = +Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    } else if (arr[i] < secSmallest && arr[i] != smallest) {
      secSmallest = arr[i];
    }
  }
  return secSmallest;
}
console.log(secondSmallest(arr));

// Sort Array in Ascending order

let array = [12, 25, 8, 55, 10, 33, 17, 11];
let n = array.length;

function sortArray(arr) {
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  console.log(array);
}

sortArray();

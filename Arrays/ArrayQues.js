// given array of marks [85,97,44,37,76,60]
// find average

let marks = [85, 97, 44, 37, 76, 60];

let sum = 0;
let avg = marks.length;

for (let i = 0; i < avg; i++) {
  sum += marks[i];
}

let average = sum / avg;

console.log(`Average of marks :${average}`);

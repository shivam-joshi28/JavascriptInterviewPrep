// 1
// 22
// 333
// 4444
// 55555

function pattern6(number) {
  for (let i = 1; i <= number; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += i;
    }
    console.log(line);
  }
}
pattern6(5);

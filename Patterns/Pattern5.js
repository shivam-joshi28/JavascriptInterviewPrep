//     *
//    **
//   ***
//  ****
// *****

function pattern5(number) {
  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= number; j++) {
      if (j <= number - i) {
        process.stdout.write(" ");
      } else {
        process.stdout.write("*");
      }
    }
    console.log("");
  }
}
pattern5(5);

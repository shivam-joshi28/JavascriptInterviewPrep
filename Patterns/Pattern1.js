// *
// **
// ***
// ****

function pattern1(number) {
  //   for (let i = 0; i <= number; i++) {
  //     for (let j = 0; j <= i; j++) {
  //       process.stdout.write("*");
  //     }
  //     console.log("");
  //   }
  for (let i = 0; i < number; i++) {
    let line = "";
    for (let j = 0; j <= i; j++) {
      line += "* ";
    }
    console.log(line);
  }
}
pattern1(4);

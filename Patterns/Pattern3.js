// ****
// ***
// **
// *

function pattern3(number) {
  for (let i = 1; i <= number; i++) {
    for (let j = i; j <= number; j++) {
      process.stdout.write("*");
    }
    console.log("");
  }
}

pattern3(4);

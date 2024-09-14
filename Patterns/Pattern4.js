// ****
// *  *
// *  *
// ****

function pattern4() {
  let row = 4;
  let col = 4;

  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= col; j++) {
      if (i == 1 || i == row) {
        process.stdout.write("*");
      } else if (j == 1 || j == col) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    console.log("");
  }
}

pattern4();

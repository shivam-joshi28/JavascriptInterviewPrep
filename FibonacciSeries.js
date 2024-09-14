let n1 = 0;
let n2 = 1;

for (let i = 1; i <= 10; i++) {
  //   process.stdout.write(n1.toString() + " ");
  console.log(n1);
  let nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
}

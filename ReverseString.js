//Reverse of String

function reverseString(str) {
  // let reversed = "";
  // console.log(str.length);

  // for (let i = str.length - 1; i >= 0; i--) {
  //   reversed += str[i];
  // }

  // return reversed;

  return str.split("").reverse().join("");
}

console.log(reverseString("Shivam, joshi"));

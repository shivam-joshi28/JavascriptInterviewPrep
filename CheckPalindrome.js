function checkPalindrome(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  if (reversed == str) return true;
  else return false;
}

console.log(checkPalindrome("shivam"));

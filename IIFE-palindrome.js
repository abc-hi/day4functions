//IIFE function

//1e.Return all the palindromes in an array

let str = "madam";

let palindrome = (function (str) {
  for (let i = 0, j = str.length - 1; i < str.length; i++, j--) {
    if (str[i] == str[j]) {
      return true;
    } else {
      return false;
    }
  }
})("madam");
console.log(palindrome);

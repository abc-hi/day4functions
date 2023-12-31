//Arrow function

//2e.Return all the palindromes in an array

let str = "madam";

let palindrome = (str) => {
  for (let i = 0, j = str.length - 1; i < str.length; i++, j--) {
    if (str[i] == str[j]) {
      return true;
    } else {
      return false;
    }
  }
};
console.log(palindrome(str));

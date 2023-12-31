//IIFE function

//1g.Remove duplicates from an array

//let arr = ["apple", "mango", "apple",
//	"orange", "mango", "mango"];

let removeDuplicates = (function (arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
})(["apple", "mango", "apple", "orange", "mango", "mango"]);
console.log(removeDuplicates);

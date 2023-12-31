//IIFE function

//1c.Sum of all numbers in an array

let arr = [1, 3, 5, 8];
const sum = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    //console.log(sum)
  }
  return sum;
};
console.log(sum(arr));

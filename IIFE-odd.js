//IIFE function

//1-a.Print odd numbers in an array

//let arr= [3,1,5,7,8];

let printOdd = (function (arr) {
  //let num;
  let odds = [];
  //for (let num of arr)
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] % 2 != 0) {
      odds.push(arr[i]);
    }
  }
  return odds;
})([3, 1, 5, 7, 8]);
console.log(printOdd);

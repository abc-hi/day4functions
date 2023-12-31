//IIFEfunction

//1h.Rotate an array by k times

//let arr=[1,3,2,8,4,9]
const rotateArray2 = (function (nums, k) {
  // reverse helper function
  function reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  k %= nums.length;

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);

  return nums;
})([1, 3, 2, 8, 4, 9]);

console.log(rotateArray2);

//IIFE function

//1f.Return median of two sorted arrays of the same size

const findMedian = (function () {
  return function (arr1, arr2) {
    const mergedArray = arr1.concat(arr2);
    const sortedArray = mergedArray.sort((a, b) => a - b);
    const length = sortedArray.length;

    if (length % 2 === 0) {
      // If the length is even, return the average of the middle two elements
      const midIndex1 = length / 2 - 1;
      const midIndex2 = length / 2;
      return (sortedArray[midIndex1] + sortedArray[midIndex2]) / 2;
    } else {
      // If the length is odd, return the middle element
      const midIndex = Math.floor(length / 2);
      return sortedArray[midIndex];
    }
  };
})();

// Example usage
const array1 = [1, 3, 5];
const array2 = [2, 4, 6];

const median = findMedian(array1, array2);
console.log("Median:", median);

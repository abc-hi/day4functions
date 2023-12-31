//IIFE function

//1d.Return all the prime numbers in an array
(function () {
  // Function to check if a number is prime
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  // Function to find prime numbers in an array
  function findPrimesInArray(arr) {
    return arr.filter(function (num) {
      return isPrime(num);
    });
  }

  // Example array
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Call the function and print the result
  const primeNumbers = findPrimesInArray(numbers);
  console.log("Prime numbers in the array:", primeNumbers);
})();

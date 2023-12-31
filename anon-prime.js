//Anonymous function

//1d.Return all the prime numbers in an array

var isPrime = function (num) {
  // Check if the number is less than 2 (not prime)
  if (num < 2) {
    return false;
  }

  // Loop from 2 to the square root of the number
  for (var i = 2; i <= Math.sqrt(num); i++) {
    // If the number is divisible by any value in the loop, it's not prime
    if (num % i === 0) {
      return false;
    }
  }

  // If no divisor was found, the number is prime
  return true;
};

// Example usage
var numberToCheck = [13, 3, 5, 8, 6];
if (isPrime(numberToCheck)) {
  console.log(numberToCheck + " is prime.");
} else {
  console.log(numberToCheck + " is not prime.");
}

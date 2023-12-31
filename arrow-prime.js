//Arrow function

//2d.Return all the prime numbers in an array

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const findPrimeNumbers = (arr) => {
  return arr.filter((num) => isPrime(num));
};

// Example usage:
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = findPrimeNumbers(numbers);

console.log("Prime numbers in the array:", primeNumbers);

// Recursive function to check if a number is prime
function isPrime(num, divisor = 2) {
  // if (num < 2) return false;
  // if (divisor > Math.sqrt(num)) return true; // no divisors found
  if(num == divisor) return true
  if (num % divisor === 0) return false;
  return isPrime(num, divisor + 1); // check next divisor
}

// Recursive function to generate prime numbers up to n
function getPrimes(n, current = 2, primes = []) {
  if (current > n) return primes; // base case
  if (isPrime(current)) primes.push(current);
  return getPrimes(n, current + 1, primes); // move to next number
}

// Example usage
console.log(getPrimes(30)); 
// Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

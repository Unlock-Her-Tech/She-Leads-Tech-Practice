/** See Problems.md. Implement using recursion. */

// Return the product of the positive integers from 1 through n using recursion.
// Assume n is a non-negative integer.
// The factorial of zero is 1.

export function factorial(num: number): number {
  if (num === 1) return 1;

  return num * factorial(num - 1);

  // Plain English Walk Through
  // factorial(4) => 4 * 3 * 2* 1
  // factorial(4) = 4 * factorial(3)
  // factorial(3) = 3 * factorial(2)
  // factorial(2) = 2 * factorial(1)
  // factorial(1) = 1 * factorial(0) => 1 * 1
}

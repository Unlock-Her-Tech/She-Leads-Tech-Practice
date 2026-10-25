/** See Problems.md. Implement using recursion. */

// each number is the sum of the previous two numbers
// Return the nth Fibonacci number using recursion.
// Positions start at 1: fib(1) = 1 and fib(2) = 1.
// Each later value is the sum of the previous two.
// Assume n is a positive integer.
// After solving, consider how memoization affects repeated work.

export function fib(num: number): number {
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);

  // Plain English Walk Through
  // fib(5) =  fib(4) + fib(3)
  // fib(4) = fib (3) + fib(2)
  // fib(3) = fib(2) + fib(1)
  // fib(2) = fib(1) + fib(0) = 1 + 1 = 2
}

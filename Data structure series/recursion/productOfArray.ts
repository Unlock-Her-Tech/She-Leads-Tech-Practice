/** See Problems.md. Implement using recursion. */

// The question is asking you to write a function
// that multiplies all the numbers in an array together using recursion.
// productOfArray([1, 2, 3, 4])
// 1 × 2 × 3  × 4

export function productOfArray(numbers: number[]): number {
  // Base Case
  if (numbers.length === 0) {
    return 1;
  }

  return numbers[0] * productOfArray(numbers.slice(1));

  // Plain English Walk through
  // 1 *  productOfArray([2,3,4])
  // 2 *  productOfArray([3,4])
  // 3 *  productOfArray([4])
  // 4  *  (productOfArray([]) => 1)
}

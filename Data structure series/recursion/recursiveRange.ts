/** See Problems.md. Implement using recursion. */

// adding numbers together from a given number down to 0.
// recursiveRange(5);
// 5 + 4 + 3 + 2 + 1 + 0

export function recursiveRange(num: number): number {
  // Base Case
  if (num === 0) return 0;

  return num + recursiveRange(num - 1);

  // Plain English Walk through
  // recursive(5)
  // 5 + recursive(4)
  // 4 + recursive(3)
  // 2 + recursive(1)
  // 1 + recursive(0)
}

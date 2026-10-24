# Recursion — Problem Set

Use recursion for each exercise. Identify the base case, recursive step, time complexity, and call-stack space complexity. These are practice questions; implementations are intentionally left to learners.

## Recursion Problem Set

### 1. power

[Starter](./power.ts)

Return the base raised to the exponent using recursion. Assume a non-negative base and a non-negative integer exponent. Do not use Math.pow or **.

Signature: `power(base: number, exponent: number): number`

Examples: `power(2, 0) → 1`, `power(2, 4) → 16`.

### 2. factorial

[Starter](./factorial.ts)

Return the product of the positive integers from 1 through n using recursion. Assume n is a non-negative integer. The factorial of zero is 1.

Signature: `factorial(n: number): number`

Examples: `factorial(0) → 1`, `factorial(4) → 24`.

### 3. productOfArray

[Starter](./productOfArray.ts)

Use recursion to multiply all values in an array of numbers. For this practice set, an empty array has product 1. Leave the input unchanged.

Signature: `productOfArray(numbers: number[]): number`

Examples: `productOfArray([2, 3, 4]) → 24`, `productOfArray([]) → 1`.

### 4. recursiveRange

[Starter](./recursiveRange.ts)

Use recursion to sum all integers from 0 through n, inclusive. Assume n is a non-negative integer.

Signature: `recursiveRange(n: number): number`

Examples: `recursiveRange(0) → 0`, `recursiveRange(6) → 21`, `recursiveRange(10) → 55`.

### 5. fib

[Starter](./fib.ts)

Return the nth Fibonacci number using recursion. Positions start at 1: fib(1) = 1 and fib(2) = 1. Each later value is the sum of the previous two. Assume n is a positive integer. After solving, consider how memoization affects repeated work.

Signature: `fib(n: number): number`

Examples: `fib(1) → 1`, `fib(4) → 3`, `fib(10) → 55`.

## Additional LeetCode Problems

### 6. Power of Two — LeetCode #231 (Easy)

[LeetCode problem](https://leetcode.com/problems/power-of-two/) · [Starter](./isPowerOfTwo.ts)

Determine whether integer n equals 2 raised to a non-negative integer exponent. Return a boolean. Inputs range from -(2^31) through 2^31 - 1.

Signature: `isPowerOfTwo(n: number): boolean`

Examples: `isPowerOfTwo(1) → true`, `isPowerOfTwo(16) → true`, `isPowerOfTwo(3) → false`, `isPowerOfTwo(0) → false`.

Solve recursively first, handling zero and negative inputs. Then try the original follow-up without loops or recursion.

### 7. Power of Three — LeetCode #326 (Easy)

[LeetCode problem](https://leetcode.com/problems/power-of-three/) · [Starter](./isPowerOfThree.ts)

Determine whether integer n equals 3 raised to a non-negative integer exponent. Return a boolean. Inputs range from -(2^31) through 2^31 - 1.

Signature: `isPowerOfThree(n: number): boolean`

Examples: `isPowerOfThree(27) → true`, `isPowerOfThree(1) → true`, `isPowerOfThree(0) → false`, `isPowerOfThree(-1) → false`.

Solve recursively first, handling zero and negative inputs. Then try the original follow-up without loops or recursion.

## Medium recursion and backtracking

Continue with [two Amazon interview practice problems](./MediumProblems.md): Combination Sum (#39) and Permutations (#46).

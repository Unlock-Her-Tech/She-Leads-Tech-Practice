/** See Problems.md. Implement using recursion. */

export function power(base: number, exponent: number): number {
  // Base Case
  if (exponent === 0) return 1;

  return base * power(base, exponent - 1);

  // Plain English Walk through
  // power(2,4) >>  2 * 2* 2* 2* 1;
  // 2 * power(2,3) >>  2 * (2 ^ 3);
  // 2 * power(2,2) >> 2 * (2 ^ 2) ;
  // 2 * power(2,1) >>2 * (2 ^ 1)
  // 2 * power(2,0) >> 2 * (2 ^ 0)
}

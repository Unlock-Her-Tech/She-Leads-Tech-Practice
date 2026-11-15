// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/

/**
 * On an opening bracket, push the closing bracket you expect to see.
 * On a closing bracket, check it against the most recent expectation.
 *
 * Time O(n) and space O(n) for n brackets.
 */
export function isValid(s: string): boolean {
  const expectedClosers: string[] = [];
  const closingBracket = new Map([["(", ")"], ["[", "]"], ["{", "}"]]);

  for (const bracket of s) {
    const closer = closingBracket.get(bracket);
    if (closer !== undefined) {
      expectedClosers.push(closer);
    } else if (expectedClosers.pop() !== bracket) {
      return false;
    }
  }
  // Any remaining expectation belongs to an unmatched opening bracket.
  return expectedClosers.length === 0;
}

// Uncomment the example and run this file to see the output.
/*
console.log(isValid("([])")); // true
console.log(isValid("([)]")); // false
*/

// 1047. Remove All Adjacent Duplicates In String
// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/

/**
 * Use a stack to hold the part of the string that remains. When the next
 * letter matches the top of the stack, remove the pair.
 *
 * Time O(n) and space O(n) for n letters.
 */
export function removeDuplicates(s: string): string {
  const letters: string[] = [];
  for (const letter of s) {
    // The top is the only letter next to the incoming one.
    if (letters.at(-1) === letter) {
      letters.pop();
    } else {
      letters.push(letter);
    }
  }
  return letters.join("");
}

// Uncomment the example and run this file to see the output.
/*
console.log(removeDuplicates("abbaca")); // "ca"
*/

// 1544. Make The String Great
// https://leetcode.com/problems/make-the-string-great/

/**
 * Use a stack for the letters that survive so far. A new letter can cancel
 * the previous survivor when they are the same letter in opposite cases.
 *
 * Time O(n) and space O(n) for n letters.
 */
export function makeGood(s: string): string {
  const letters: string[] = [];
  for (const letter of s) {
    const previous = letters.at(-1);
    // Compare both the original letters and their lowercase forms.
    if (
      previous !== undefined &&
      previous !== letter &&
      previous.toLowerCase() === letter.toLowerCase()
    ) {
      letters.pop();
    } else {
      letters.push(letter);
    }
  }
  return letters.join("");
}

// Uncomment the example and run this file to see the output.
/*
console.log(makeGood("leEeetcode")); // "leetcode"
*/

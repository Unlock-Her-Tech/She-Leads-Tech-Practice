// 844. Backspace String Compare
// https://leetcode.com/problems/backspace-string-compare/

/**
 * Simulate each editor with a stack. Backspace removes the most recent
 * character, and any other character becomes the new top.
 *
 * Time O(s.length + t.length) and space O(s.length + t.length).
 */
export function backspaceCompare(s: string, t: string): boolean {
  function typeText(input: string): string {
    const characters: string[] = [];
    for (const character of input) {
      if (character === "#") {
        // Popping an empty array leaves it empty.
        characters.pop();
      } else {
        characters.push(character);
      }
    }
    return characters.join("");
  }

  return typeText(s) === typeText(t);
}

// Uncomment the example and run this file to see the output.
/*
console.log(backspaceCompare("ab#c", "ad#c")); // true
*/

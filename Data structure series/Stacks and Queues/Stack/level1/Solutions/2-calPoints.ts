// 682. Baseball Game
// https://leetcode.com/problems/baseball-game/

/**
 * Keep the valid scores in a stack. Each operation reads, adds, or removes
 * scores at the top. Add up the scores that are left at the end.
 *
 * Time O(n) and space O(n) for n operations.
 */
export function calPoints(operations: string[]): number {
  const scores: number[] = [];
  for (const operation of operations) {
    // The problem guarantees that the scores needed by +, D, and C exist.
    switch (operation) {
      case "+":
        scores.push(scores.at(-1)! + scores.at(-2)!);
        break;
      case "D":
        scores.push(scores.at(-1)! * 2);
        break;
      case "C":
        scores.pop();
        break;
      default:
        scores.push(Number(operation));
    }
  }
  return scores.reduce((total, score) => total + score, 0);
}

// Uncomment the example and run this file to see the output.
/*
console.log(calPoints(["5", "2", "C", "D", "+"])); // 30
*/

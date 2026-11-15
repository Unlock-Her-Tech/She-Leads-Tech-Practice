// 150. Evaluate Reverse Polish Notation
// https://leetcode.com/problems/evaluate-reverse-polish-notation/

/**
 * Push numbers onto the stack. For each operator, pop its two operands
 * and push the result. The final stack entry is the answer.
 *
 * Time O(n) and space O(n) for n tokens.
 */
export function evalRPN(tokens: string[]): number {
  const values: number[] = [];
  for (const token of tokens) {
    if (token !== "+" && token !== "-" && token !== "*" && token !== "/") {
      values.push(Number(token));
      continue;
    }

    // The right operand was pushed last, so it comes out first.
    const right = values.pop()!;
    const left = values.pop()!;
    switch (token) {
      case "+":
        values.push(left + right);
        break;
      case "-":
        values.push(left - right);
        break;
      case "*":
        values.push(left * right);
        break;
      case "/":
        // Truncate toward zero and convert JavaScript's negative zero to 0.
        values.push(Math.trunc(left / right) || 0);
        break;
    }
  }
  return values.pop()!;
}

// Uncomment the example and run this file to see the output.
/*
console.log(evalRPN(["4", "13", "5", "/", "+"])); // 6
*/

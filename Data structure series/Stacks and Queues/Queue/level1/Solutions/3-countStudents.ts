// 1700. Number of Students Unable to Eat Lunch
// https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/

/**
 * Keep the students in queue order and track the current sandwich by
 * index. Count how many students have passed on that sandwich.
 *
 * Space O(n) for n students. Each sandwich can take up to n attempts,
 * and each array shift can move up to n entries.
 */
export function countStudents(students: number[], sandwiches: number[]): number {
  const line = [...students];
  let sandwich = 0;
  let passes = 0;

  // A full rotation without a match means nobody wants the sandwich.
  while (line.length > 0 && passes < line.length) {
    const preference = line.shift()!;
    if (preference === sandwiches[sandwich]) {
      sandwich++;
      // A new sandwich is available, so begin counting passes again.
      passes = 0;
    } else {
      line.push(preference);
      passes++;
    }
  }
  return line.length;
}

// Uncomment the example and run this file to see the output.
/*
console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1])); // 3
*/

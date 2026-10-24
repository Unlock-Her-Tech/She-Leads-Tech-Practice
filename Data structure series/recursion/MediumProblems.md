# Medium Recursion and Backtracking

These extend the seven questions in [Problems.md](./Problems.md). Solve both with recursive backtracking; explain the base case, choices, undo step, and time and space costs.

Both appear in a [community compilation of Amazon SDE1 interview questions](https://leetcode.com/discuss/post/488887/rqq1489223579764.html). This is community-reported interview history, not an official Amazon question bank or a guarantee of current questions. Problem details are paraphrased from the linked LeetCode statements.

## 8. Combination Sum — LeetCode #39 (Medium)

[LeetCode](https://leetcode.com/problems/combination-sum/) · [TypeScript starter](./combinationSum.ts)

Given distinct positive candidate values and a target, find every unique combination whose sum equals the target. A value may be reused any number of times. Different orderings of the same values count as one combination; return the combinations in any order.

Signature: `combinationSum(candidates: number[], target: number): number[][]`

Constraints: 1–30 candidates; each value is 2–40; target is 1–40. Inputs have fewer than 150 valid combinations.

### Examples

- `combinationSum([2, 3, 6, 7], 7)` → `[[2, 2, 3], [7]]`. Reusing 2 is allowed.
- `combinationSum([2, 3, 5], 8)` → `[[2, 2, 2, 2], [2, 3, 3], [3, 5]]`.
- `combinationSum([2], 1)` → `[]`. No combination reaches the target.

Practice checks: prevent duplicate combinations and store independent copies of each completed path. If you sort candidates for pruning, sort a copy to preserve the caller's array.

## 9. Permutations — LeetCode #46 (Medium)

[LeetCode](https://leetcode.com/problems/permutations/) · [TypeScript starter](./permute.ts)

Given distinct integers, produce every ordering using each input element exactly once. Return the orderings in any order.

Signature: `permute(nums: number[]): number[][]`

Constraints: 1–6 integers; values range from -10 through 10; all values are distinct.

### Examples

- `permute([1, 2, 3])` → `[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]`.
- `permute([0, 1])` → `[[0, 1], [1, 0]]`.
- `permute([1])` → `[[1]]`.

Practice checks: ensure each result contains every input value exactly once, restore state after each branch, and store independent copies of completed permutations. For n input values, expect n! results.

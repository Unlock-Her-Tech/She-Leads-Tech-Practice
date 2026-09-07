# 🧩 Practice Session 01 — Fixed-Length Sliding Windows

> **TOPIC GUIDE:** Practise recognising and applying a sliding window whose size remains fixed.

[![Part of She Leads Tech](https://img.shields.io/badge/She%20Leads%20Tech-PRACTISE-16A34A)](https://github.com/Unlock-Her-Tech)
[![Topic](https://img.shields.io/badge/pattern-fixed--length%20sliding%20window-15803D)](Problems.md)

## Where this topic fits

[Practice home](../../README.md) → **Session 01: Fixed-length sliding windows** → [Problem set](Problems.md) → [Solutions](Solutions/)

Use this guide for the fixed-length sliding-window practice set. For general information about all She Leads Tech practice resources, return to the [Practice README](../../README.md).

## What you will practise

- Recognising when a fixed-length window is appropriate
- Building the first window
- Moving the window by adding one value and removing another
- Tracking sums, frequencies, distinct values and coordinates
- Comparing a repeated calculation with an incremental update
- Explaining the time and space complexity of your solution

## Before you begin

You should be comfortable with:

- TypeScript arrays, strings, loops and functions
- Index boundaries
- Maps or frequency counters
- Basic time and space complexity

If this pattern is new to you, study the [fixed-length sliding-window session in She Leads Tech Theory](https://github.com/Unlock-Her-Tech/She-Leads-Tech-Theory/tree/main/Leetcode-Typescript/Session3/LeetCode-643-Easy).

## How to use this practice set

1. Read the full list in [Problems.md](Problems.md).
2. Choose the next problem in the suggested order below.
3. Identify the window size and what information must be tracked.
4. Write a simple correct approach before optimising it.
5. Test the first window, each movement of the window and relevant edge cases.
6. State the time and space complexity.
7. Check [Solutions](Solutions/) only after completing a serious attempt.
8. Compare the reference approach with yours and note what you learned.

## Suggested problem order

| Step | Problem | Focus |
| ---: | --- | --- |
| 1 | Maximum subarray sum | Learn the basic add-one, remove-one update |
| 2 | Maximum subarray average — LeetCode 643 | Reuse a running sum |
| 3 | Maximum points from cards — LeetCode 1423 | Reframe the window |
| 4 | Substrings of length 3 with distinct characters — LeetCode 1876 | Track characters in a string |
| 5 | Permutation substring within a string — LeetCode 567 | Maintain character frequencies |
| 6 | Distinct points after direction substring removal — LeetCode 3694 | Apply the pattern to coordinates |
| 7 | Maximum all-distinct subarray sum — LeetCode 2461 | Combine a running sum with uniqueness |

Work from top to bottom: the early problems establish the pattern, while the later ones combine it with additional state.

## Problem-solving checklist

Before coding, answer these questions:

1. What is the fixed window size?
2. What does the current window need to remember?
3. How is the first window built?
4. What enters when the window moves?
5. What leaves when the window moves?
6. When is the answer updated?
7. Which edge cases could break the indices or tracked state?

## Solutions

Reference implementations are stored in [Solutions](Solutions/). They are learning aids, not starting points. Your solution may look different and still be correct if it handles the constraints and you can explain its trade-offs.

## When you are finished

You should be able to:

- Recognise a fixed-length sliding-window problem
- Explain why the optimised approach avoids repeated work
- Move a window without rebuilding it
- Choose suitable state for sums, counts or distinct values
- Describe the complexity of your solution

Continue to [She Leads Tech Review](https://github.com/Unlock-Her-Tech/She-Leads-Tech-Review) to check what you remember.

---

Part of [She Leads Tech Practice](../../README.md) · Attempt first, compare second, revisit later.

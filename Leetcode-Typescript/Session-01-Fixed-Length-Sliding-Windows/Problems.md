# She Leads Tech Practice: Sliding Windows (Fixed Length)

## Problem set

1. Maximum subarray sum

   _Description: a recap from She Leads Tech Theory_

1. Maximum subarray average (Leetcode #643, easy)

   _Description: a recap from She Leads Tech Theory_

1. Maximum points from cards (Leetcode #1423, medium)

   _Description: another summation problem_

1. Counting substrings of length `3` with distinct characters (Leetcode #1876, easy)

   _Description: a starting string-based problem_

1. Checking for permutation substring within a string (Leetcode #567, medium)

   _Description: another string-based problem_

1. Counting distinct points reachable after direction substring removal (Leetcode #3694, medium)

   _Description: a coordinate-based problem_

1. Maximum all-distinct subarray sum (Leetcode #2461, medium)

   _Description: another summation problem, leading towards the next She Leads Tech Theory topic_

## Problem statements

### Maximum subarray sum

You are given an array `numbers` of length `n`, and a separate integer `k`.

Work out the maximum possible sum of integers belonging to any subarray of `numbers` that has length `k`.

### Maximum subarray average (Leetcode #643, easy)

You are given an array `numbers` of length `n`, and a separate integer `k`.

Work out the maximum possible average of integers belonging to any subarray of `numbers` that has length `k`.

### Maximum points from cards (Leetcode #1423, medium)

You are presented with `n` cards arranged in a row, with each card having been assigned a certain number of points. These point values are given in an array `points` of length `n`.

You are invited to play a game consisting of exactly `k` steps. For each step, you must take a card from either the beginning or the end of the row. Your final score will be the sum of the points of the cards you take.

Work out the maximum score you can obtain.

### Counting substrings of length `3` with distinct characters (Leetcode #1876, easy)

Given a string `s​​​​`​, work out the number of all-distinct substrings of length `3` inside `s​​​​​`​.

**Note**: if there are multiple occurrences of the same substring, every occurrence should be counted.

**Extension**: generalise your solution to work out the number of all-distinct substrings of length `k` inside `s​​​​​`. (Note that finding an efficient solution using the fixed-length sliding window technique is quite tricky.)

### Checking for permutation substring within a string (Leetcode #567, medium)

Given two strings `needle` and `haystack`, return `true` if `haystack` contains a substring that is a permutation of `needle`, or `false` otherwise.

**Note**: you may assume that each string consists solely of the lowercase letters of the standard English alphabet. If you encounter any other characters, feel free to handle them as you like.

### Counting distinct points reachable after direction substring removal (Leetcode #3694, medium)

Given a string `s` consisting of characters `'U'`, `'D'`, `'L'` and `'R'`, representing the following respective moves within an infinite 2D Cartesian grid:

| Character | Move                           |
| --------- | ------------------------------ |
| `'U'`     | Move from (x, y) to (x, y + 1) |
| `'D'`     | Move from (x, y) to (x, y - 1) |
| `'L'`     | Move from (x, y) to (x - 1, y) |
| `'R'`     | Move from (x, y) to (x + 1, y) |

And given also an integer `k`, return the number of distinct final coordinates reachable when any substring of length `k` is removed from `s` and the remaining moves are followed in order, starting from coordinate `(0, 0)`.

### Maximum all-distinct subarray sum (Leetcode #2461, medium)

You are given an array `numbers` of length `n`, and a separate integer `k`.

Work out the maximum possible sum of integers belonging to any all-distinct subarray of `numbers` that has length `k`.

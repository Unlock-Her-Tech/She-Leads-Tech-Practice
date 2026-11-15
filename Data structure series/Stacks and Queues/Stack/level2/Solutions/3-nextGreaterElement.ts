// 496. Next Greater Element I
// https://leetcode.com/problems/next-greater-element-i/

/**
 * Keep a stack of values still waiting for a greater value. Scan nums2
 * from left to right, and record the first greater value in a map.
 *
 * Time O(nums1.length + nums2.length) and extra space O(nums2.length).
 */
export function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const unresolved: number[] = [];
  const nextGreater = new Map<number, number>();

  for (const value of nums2) {
    // Resolve every smaller value at the top before saving this value.
    while (unresolved.length > 0 && unresolved.at(-1)! < value) {
      nextGreater.set(unresolved.pop()!, value);
    }
    unresolved.push(value);
  }

  return nums1.map((value) => nextGreater.get(value) ?? -1);
}

// Uncomment the example and run this file to see the output.
/*
console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])); // [-1, 3, -1]
*/

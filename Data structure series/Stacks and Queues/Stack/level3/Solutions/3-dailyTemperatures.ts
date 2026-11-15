// 739. Daily Temperatures
// https://leetcode.com/problems/daily-temperatures/

/**
 * Store indices of earlier days that are still waiting for a warmer
 * temperature. On a warmer day, subtract each resolved index from today.
 *
 * Time O(n) and space O(n) for n days.
 */
export function dailyTemperatures(temperatures: number[]): number[] {
  // Unresolved days keep the default answer of zero.
  const waitTimes = new Array<number>(temperatures.length).fill(0);
  const unresolvedDays: number[] = [];

  for (let day = 0; day < temperatures.length; day++) {
    while (
      unresolvedDays.length > 0 &&
      temperatures[unresolvedDays.at(-1)!] < temperatures[day]
    ) {
      const earlierDay = unresolvedDays.pop()!;
      waitTimes[earlierDay] = day - earlierDay;
    }
    unresolvedDays.push(day);
  }

  return waitTimes;
}

// Uncomment the example and run this file to see the output.
/*
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
// Expected [1, 1, 4, 2, 1, 1, 0, 0]
*/

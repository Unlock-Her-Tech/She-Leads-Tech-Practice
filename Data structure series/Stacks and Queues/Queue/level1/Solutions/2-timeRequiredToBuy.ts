// 2073. Time Needed to Buy Tickets
// https://leetcode.com/problems/time-needed-to-buy-tickets/

/**
 * Queue the original person indices so you can identify person k even
 * as the line changes. Each loop buys one ticket for the front person.
 *
 * Space O(n) for n people. The simulation uses one turn per sale, and each
 * array shift can move up to n entries.
 */
export function timeRequiredToBuy(tickets: number[], k: number): number {
  const remaining = [...tickets];
  const line = tickets.map((_, person) => person);
  let seconds = 0;

  while (line.length > 0) {
    const person = line.shift()!;
    remaining[person]--;
    seconds++;
    // A person with tickets left rejoins the back of the line.
    if (remaining[person] > 0) {
      line.push(person);
    } else if (person === k) {
      break;
    }
  }
  return seconds;
}

// Uncomment the example and run this file to see the output.
/*
console.log(timeRequiredToBuy([2, 3, 2], 2)); // 6
*/

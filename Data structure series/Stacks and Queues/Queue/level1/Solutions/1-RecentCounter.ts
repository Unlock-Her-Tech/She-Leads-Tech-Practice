// 933. Number of Recent Calls
// https://leetcode.com/problems/number-of-recent-calls/

/**
 * Append each request to a queue of timestamps. Advance the front past
 * expired requests, then count the entries still in the window.
 *
 * Amortized O(1) time per ping and O(w) space for w requests in the window.
 */
export class RecentCounter {
  private timestamps: number[] = [];
  private head = 0;

  ping(t: number): number {
    this.timestamps.push(t);
    // A timestamp exactly 3000 ms old still counts.
    while (this.timestamps[this.head] < t - 3000) {
      this.head++;
    }

    // Reclaim expired entries once they make up at least half the array.
    if (this.head * 2 >= this.timestamps.length) {
      this.timestamps = this.timestamps.slice(this.head);
      this.head = 0;
    }
    return this.timestamps.length - this.head;
  }
}

// Uncomment the example and run this file to see the output.
/*
const counter = new RecentCounter();
console.log([1, 100, 3001, 3002].map((t) => counter.ping(t))); // [1, 2, 3, 3]
*/

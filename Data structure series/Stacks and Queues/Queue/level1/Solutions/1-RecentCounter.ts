// 933. Number of Recent Calls
// https://leetcode.com/problems/number-of-recent-calls/

/**
 * Append each request to a queue of timestamps. Move firstActiveIndex past
 * expired requests, then count the entries still in the window.
 *
 * Amortized O(1) time per ping and O(w) space for w requests in the window.
 */
export class RecentCounter {
  private timestamps: number[] = [];
  private firstActiveIndex = 0;

  ping(t: number): number {
    this.timestamps.push(t);
    // A timestamp exactly 3000 ms old still counts.
    while (this.timestamps[this.firstActiveIndex] < t - 3000) {
      this.firstActiveIndex++;
    }

    // Reclaim expired entries once they make up at least half the array.
    if (this.firstActiveIndex * 2 >= this.timestamps.length) {
      this.timestamps = this.timestamps.slice(this.firstActiveIndex);
      this.firstActiveIndex = 0;
    }
    return this.timestamps.length - this.firstActiveIndex;
  }
}

// Uncomment the example and run this file to see the output.
/*
const counter = new RecentCounter();
console.log([1, 100, 3001, 3002].map((t) => counter.ping(t))); // [1, 2, 3, 3]
*/

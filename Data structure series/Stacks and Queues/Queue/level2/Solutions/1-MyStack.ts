// 225. Implement Stack using Queues
// https://leetcode.com/problems/implement-stack-using-queues/

/**
 * Use one queue. After pushing a value, move the older entries from the
 * front to the back so the new value is the first one removed.
 *
 * Space O(n) for n entries. A push rotates n existing entries, and each
 * array shift can move up to n entries.
 */
export class MyStack {
  private queue: number[] = [];

  push(x: number): void {
    const olderEntries = this.queue.length;
    this.queue.push(x);
    // Rotate only the older entries, leaving x at the front.
    for (let moved = 0; moved < olderEntries; moved++) {
      this.queue.push(this.queue.shift()!);
    }
  }

  pop(): number {
    return this.queue.shift()!;
  }

  top(): number {
    return this.queue[0];
  }

  empty(): boolean {
    return this.queue.length === 0;
  }
}

// Uncomment the example and run this file to see the output.
/*
const stack = new MyStack();
stack.push(1);
stack.push(2);
console.log(stack.top(), stack.pop(), stack.empty()); // 2 2 false
*/

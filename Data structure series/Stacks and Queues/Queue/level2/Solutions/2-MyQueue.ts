// 232. Implement Queue using Stacks
// https://leetcode.com/problems/implement-queue-using-stacks/

/**
 * Use one stack for incoming values and one for values ready to remove.
 * Moving items between stacks reverses their order so the oldest is on top.
 *
 * Amortized O(1) time per operation and O(n) space for n entries.
 */
export class MyQueue {
  private incoming: number[] = [];
  private outgoing: number[] = [];

  push(x: number): void {
    this.incoming.push(x);
  }

  pop(): number {
    this.prepareFront();
    return this.outgoing.pop()!;
  }

  peek(): number {
    this.prepareFront();
    return this.outgoing.at(-1)!;
  }

  empty(): boolean {
    return this.incoming.length === 0 && this.outgoing.length === 0;
  }

  private prepareFront(): void {
    // Finish serving older entries before moving newer ones across.
    if (this.outgoing.length === 0) {
      while (this.incoming.length > 0) {
        this.outgoing.push(this.incoming.pop()!);
      }
    }
  }
}

// Uncomment the example and run this file to see the output.
/*
const queue = new MyQueue();
queue.push(1);
queue.push(2);
console.log(queue.peek(), queue.pop(), queue.empty()); // 1 1 false
*/

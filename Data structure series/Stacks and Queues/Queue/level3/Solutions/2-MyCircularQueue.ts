// 622. Design Circular Queue
// https://leetcode.com/problems/design-circular-queue/

/**
 * Store the front index and the current size. Use the remainder after
 * division by the capacity to wrap an index back to the start.
 *
 * Time O(1) per operation and space O(k) for capacity k.
 */
export class MyCircularQueue {
  private values: number[];
  private head = 0;
  private size = 0;

  constructor(k: number) {
    this.values = new Array<number>(k);
  }

  enQueue(value: number): boolean {
    if (this.isFull()) {
      return false;
    }
    // The position just after the last item is the next free slot.
    const tail = (this.head + this.size) % this.values.length;
    this.values[tail] = value;
    this.size++;
    return true;
  }

  deQueue(): boolean {
    if (this.isEmpty()) {
      return false;
    }
    this.head = (this.head + 1) % this.values.length;
    this.size--;
    return true;
  }

  Front(): number {
    return this.isEmpty() ? -1 : this.values[this.head];
  }

  Rear(): number {
    if (this.isEmpty()) {
      return -1;
    }
    const tail = (this.head + this.size - 1) % this.values.length;
    return this.values[tail];
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  isFull(): boolean {
    return this.size === this.values.length;
  }
}

// Uncomment the example and run this file to see the output.
/*
const circularQueue = new MyCircularQueue(2);
console.log(circularQueue.enQueue(1), circularQueue.enQueue(2), circularQueue.enQueue(3)); // true true false
circularQueue.deQueue();
circularQueue.enQueue(3);
console.log(circularQueue.Front(), circularQueue.Rear()); // 2 3
*/

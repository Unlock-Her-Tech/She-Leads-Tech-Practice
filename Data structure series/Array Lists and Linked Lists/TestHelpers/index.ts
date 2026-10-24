// Ideally don't look too much at this file!

// Helpers shared by the test files in this directory.
// They build and inspect lists by hand, so the tests never depend on any of
// the other functions to be implemented.

import assert from "node:assert/strict";

import { ArrayList } from "../ListDataStructures/ArrayList.ts";
import {
  SinglyLinkedList,
  SinglyLinkedListNode,
} from "../ListDataStructures/SinglyLinkedList.ts";
import {
  DoublyLinkedList,
  DoublyLinkedListNode,
} from "../ListDataStructures/DoublyLinkedList.ts";

const MAX_NODES = 1000;

export function makeArrayList<T>(
  values: T[],
  capacity: number = Math.max(values.length, 4),
): ArrayList<T> {
  const list = new ArrayList<T>(capacity);
  values.forEach((value, i) => {
    list._internalArray[i] = value;
  });
  list._length = values.length;
  return list;
}

export function makeSinglyLinkedList<T>(values: T[]): SinglyLinkedList<T> {
  const list = new SinglyLinkedList<T>();
  let previous: SinglyLinkedListNode<T> | null = null;
  for (const value of values) {
    const node = new SinglyLinkedListNode(value);
    if (previous) {
      previous.next = node;
    } else {
      list.head = node;
    }
    previous = node;
  }
  return list;
}

export function makeDoublyLinkedList<T>(values: T[]): DoublyLinkedList<T> {
  const list = new DoublyLinkedList<T>();
  for (const value of values) {
    const node = new DoublyLinkedListNode(value);
    if (list.tail) {
      list.tail.next = node;
      node.prev = list.tail;
    } else {
      list.head = node;
    }
    list.tail = node;
  }
  return list;
}

// Returns the nodes of the list, in order, by following `next` from `head`.
export function getSinglyLinkedListNodes<T>(
  list: SinglyLinkedList<T>,
): SinglyLinkedListNode<T>[] {
  const nodes: SinglyLinkedListNode<T>[] = [];
  let current = list.head;
  while (current) {
    assert.ok(nodes.length < MAX_NODES, "list seems to contain a cycle");
    nodes.push(current);
    current = current.next;
  }
  return nodes;
}

export function getDoublyLinkedListNodes<T>(
  list: DoublyLinkedList<T>,
): DoublyLinkedListNode<T>[] {
  const nodes: DoublyLinkedListNode<T>[] = [];
  let current = list.head;
  while (current) {
    assert.ok(nodes.length < MAX_NODES, "list seems to contain a cycle");
    nodes.push(current);
    current = current.next;
  }
  return nodes;
}

export function assertArrayListEquals<T>(
  list: ArrayList<T>,
  expected: T[],
): void {
  assert.equal(list.length, expected.length, "wrong length");
  assert.ok(list.capacity >= list.length, "length exceeds capacity");
  const actual: T[] = [];
  for (let i = 0; i < list.length; i++) {
    actual.push(list._internalArray[i]);
  }
  assert.deepEqual(actual, expected);
}

export function assertSinglyLinkedListEquals<T>(
  list: SinglyLinkedList<T>,
  expected: T[],
): void {
  const actual = getSinglyLinkedListNodes(list).map((node) => node.value);
  assert.deepEqual(actual, expected);
}

export function assertDoublyLinkedListEquals<T>(
  list: DoublyLinkedList<T>,
  expected: T[],
): void {
  const forwards = getDoublyLinkedListNodes(list).map((node) => node.value);
  assert.deepEqual(forwards, expected, "wrong values going forwards");

  const backwards: T[] = [];
  let current = list.tail;
  while (current) {
    assert.ok(backwards.length < MAX_NODES, "list seems to contain a cycle");
    backwards.push(current.value);
    current = current.prev;
  }
  assert.deepEqual(
    backwards,
    expected.slice().reverse(),
    "wrong values going backwards",
  );

  assert.equal(list.head?.prev ?? null, null, "head.prev should be null");
  assert.equal(list.tail?.next ?? null, null, "tail.next should be null");
  if (expected.length === 0) {
    assert.equal(list.head, null, "head should be null for an empty list");
    assert.equal(list.tail, null, "tail should be null for an empty list");
  }
}

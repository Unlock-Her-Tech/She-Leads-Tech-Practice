// Tests so you can see whether your implemented functionality is working.
// You shouldn't edit these permanently, but feel free to do so temporarily.

import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { ArrayList } from "../ListDataStructures/ArrayList.ts";
import {
  SinglyLinkedList,
  SinglyLinkedListNode,
} from "../ListDataStructures/SinglyLinkedList.ts";
import {
  DoublyLinkedList,
  DoublyLinkedListNode,
} from "../ListDataStructures/DoublyLinkedList.ts";
import {
  ArrayList_GetFirstValue,
  SinglyLinkedList_GetFirstNode,
  SinglyLinkedList_GetFirstValue,
  DoublyLinkedList_GetFirstNode,
  DoublyLinkedList_GetFirstValue,
} from "./1.1-GetFirst.ts";

function makeArrayList<T>(values: T[]): ArrayList<T> {
  const list = new ArrayList<T>(4);
  values.forEach((value, i) => {
    list._internalArray[i] = value;
  });
  list._length = values.length;
  return list;
}

function makeSinglyLinkedList<T>(values: T[]): SinglyLinkedList<T> {
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

function makeDoublyLinkedList<T>(values: T[]): DoublyLinkedList<T> {
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

describe("ArrayList_GetFirstValue", () => {
  it("works for an empty array", () => {
    const list = makeArrayList<number>([]);
    assert.equal(ArrayList_GetFirstValue(list), undefined);
  });

  it("works for a singleton array", () => {
    const list = makeArrayList([1]);
    assert.equal(ArrayList_GetFirstValue(list), 1);
  });

  it("works for an array with multiple elements", () => {
    const list = makeArrayList([1, 2, 3]);
    assert.equal(ArrayList_GetFirstValue(list), 1);
  });

  it("does not modify the array", () => {
    const list = makeArrayList([1, 2, 3]);
    ArrayList_GetFirstValue(list);
    assert.equal(list.length, 3);
    assert.equal(list._internalArray[0], 1);
    assert.equal(list._internalArray[1], 2);
    assert.equal(list._internalArray[2], 3);
  });
});

describe("SinglyLinkedList_GetFirstNode", () => {
  it("works for an empty list", () => {
    const list = makeSinglyLinkedList<number>([]);
    assert.equal(SinglyLinkedList_GetFirstNode(list), null);
  });

  it("works for a singleton list", () => {
    const list = makeSinglyLinkedList([1]);
    assert.equal(SinglyLinkedList_GetFirstNode(list), list.head);
  });

  it("works for a list with multiple elements", () => {
    const list = makeSinglyLinkedList([1, 2, 3]);
    const node = SinglyLinkedList_GetFirstNode(list);
    assert.equal(node, list.head);
    assert.equal(node?.value, 1);
  });

  it("does not modify the list", () => {
    const list = makeSinglyLinkedList([1, 2, 3]);
    SinglyLinkedList_GetFirstNode(list);
    assert.equal(list.head?.value, 1);
    assert.equal(list.head?.next?.value, 2);
    assert.equal(list.head?.next?.next?.value, 3);
    assert.equal(list.head?.next?.next?.next, null);
  });
});

describe("SinglyLinkedList_GetFirstValue", () => {
  it("works for an empty list", () => {
    const list = makeSinglyLinkedList<number>([]);
    assert.equal(SinglyLinkedList_GetFirstValue(list), undefined);
  });

  it("works for a singleton list", () => {
    const list = makeSinglyLinkedList([1]);
    assert.equal(SinglyLinkedList_GetFirstValue(list), 1);
  });

  it("works for a list with multiple elements", () => {
    const list = makeSinglyLinkedList([1, 2, 3]);
    assert.equal(SinglyLinkedList_GetFirstValue(list), 1);
  });

  it("does not modify the list", () => {
    const list = makeSinglyLinkedList([1, 2, 3]);
    SinglyLinkedList_GetFirstValue(list);
    assert.equal(list.head?.value, 1);
    assert.equal(list.head?.next?.value, 2);
    assert.equal(list.head?.next?.next?.value, 3);
    assert.equal(list.head?.next?.next?.next, null);
  });
});

describe("DoublyLinkedList_GetFirstNode", () => {
  it("works for an empty list", () => {
    const list = makeDoublyLinkedList<number>([]);
    assert.equal(DoublyLinkedList_GetFirstNode(list), null);
  });

  it("works for a singleton list", () => {
    const list = makeDoublyLinkedList([1]);
    assert.equal(DoublyLinkedList_GetFirstNode(list), list.head);
  });

  it("works for a list with multiple elements", () => {
    const list = makeDoublyLinkedList([1, 2, 3]);
    const node = DoublyLinkedList_GetFirstNode(list);
    assert.equal(node, list.head);
    assert.equal(node?.value, 1);
  });

  it("does not modify the list", () => {
    const list = makeDoublyLinkedList([1, 2, 3]);
    DoublyLinkedList_GetFirstNode(list);
    assert.equal(list.head?.value, 1);
    assert.equal(list.head?.prev, null);
    assert.equal(list.head?.next?.value, 2);
    assert.equal(list.tail?.value, 3);
    assert.equal(list.tail?.next, null);
    assert.equal(list.tail?.prev?.value, 2);
  });
});

describe("DoublyLinkedList_GetFirstValue", () => {
  it("works for an empty list", () => {
    const list = makeDoublyLinkedList<number>([]);
    assert.equal(DoublyLinkedList_GetFirstValue(list), undefined);
  });

  it("works for a singleton list", () => {
    const list = makeDoublyLinkedList([1]);
    assert.equal(DoublyLinkedList_GetFirstValue(list), 1);
  });

  it("works for a list with multiple elements", () => {
    const list = makeDoublyLinkedList([1, 2, 3]);
    assert.equal(DoublyLinkedList_GetFirstValue(list), 1);
  });

  it("does not modify the list", () => {
    const list = makeDoublyLinkedList([1, 2, 3]);
    DoublyLinkedList_GetFirstValue(list);
    assert.equal(list.head?.value, 1);
    assert.equal(list.head?.prev, null);
    assert.equal(list.head?.next?.value, 2);
    assert.equal(list.tail?.value, 3);
    assert.equal(list.tail?.next, null);
    assert.equal(list.tail?.prev?.value, 2);
  });
});

// Tests so you can see whether your implemented functionality is working.
// You shouldn't edit these permanently, but feel free to do so temporarily.

import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { SinglyLinkedListNode } from "../ListDataStructures/SinglyLinkedList.ts";
import { DoublyLinkedListNode } from "../ListDataStructures/DoublyLinkedList.ts";
import {
  assertArrayListEquals,
  assertDoublyLinkedListEquals,
  assertSinglyLinkedListEquals,
  getDoublyLinkedListNodes,
  getSinglyLinkedListNodes,
  makeArrayList,
  makeDoublyLinkedList,
  makeSinglyLinkedList,
} from "../TestHelpers/index.ts";
import {
  ArrayList_InsertValueAtIndex,
  SinglyLinkedList_InsertValueAtIndex,
  SinglyLinkedList_InsertNodeAtIndex,
  DoublyLinkedList_InsertValueAtIndex,
  DoublyLinkedList_InsertNodeAtIndex,
} from "./4.3-InsertAtIndex.ts";

describe("ArrayList_InsertValueAtIndex", () => {
  it("works for an empty array", () => {
    const list = makeArrayList<number>([]);
    ArrayList_InsertValueAtIndex(list, 0, 1);
    assertArrayListEquals(list, [1]);
  });

  it("works at the start, in the middle and at the end", () => {
    const list = makeArrayList([2, 4]);
    ArrayList_InsertValueAtIndex(list, 0, 1);
    assertArrayListEquals(list, [1, 2, 4]);
    ArrayList_InsertValueAtIndex(list, 2, 3);
    assertArrayListEquals(list, [1, 2, 3, 4]);
    ArrayList_InsertValueAtIndex(list, 4, 5);
    assertArrayListEquals(list, [1, 2, 3, 4, 5]);
  });

  it("works when the array is already at full capacity", () => {
    const list = makeArrayList([1, 3], 2);
    ArrayList_InsertValueAtIndex(list, 1, 2);
    assertArrayListEquals(list, [1, 2, 3]);
  });
});

describe("SinglyLinkedList_InsertValueAtIndex", () => {
  it("works for an empty list", () => {
    const list = makeSinglyLinkedList<number>([]);
    SinglyLinkedList_InsertValueAtIndex(list, 0, 1);
    assertSinglyLinkedListEquals(list, [1]);
  });

  it("works at the start, in the middle and at the end", () => {
    const list = makeSinglyLinkedList([2, 4]);
    SinglyLinkedList_InsertValueAtIndex(list, 0, 1);
    assertSinglyLinkedListEquals(list, [1, 2, 4]);
    SinglyLinkedList_InsertValueAtIndex(list, 2, 3);
    assertSinglyLinkedListEquals(list, [1, 2, 3, 4]);
    SinglyLinkedList_InsertValueAtIndex(list, 4, 5);
    assertSinglyLinkedListEquals(list, [1, 2, 3, 4, 5]);
  });
});

describe("SinglyLinkedList_InsertNodeAtIndex", () => {
  it("works for an empty list", () => {
    const list = makeSinglyLinkedList<number>([]);
    const node = new SinglyLinkedListNode(1);
    SinglyLinkedList_InsertNodeAtIndex(list, 0, node);
    assertSinglyLinkedListEquals(list, [1]);
    assert.equal(list.head, node);
  });

  it("works at the start, in the middle and at the end", () => {
    const list = makeSinglyLinkedList([2, 4]);
    const first = new SinglyLinkedListNode(1);
    const middle = new SinglyLinkedListNode(3);
    const last = new SinglyLinkedListNode(5);

    SinglyLinkedList_InsertNodeAtIndex(list, 0, first);
    assertSinglyLinkedListEquals(list, [1, 2, 4]);
    SinglyLinkedList_InsertNodeAtIndex(list, 2, middle);
    assertSinglyLinkedListEquals(list, [1, 2, 3, 4]);
    SinglyLinkedList_InsertNodeAtIndex(list, 4, last);
    assertSinglyLinkedListEquals(list, [1, 2, 3, 4, 5]);

    const nodes = getSinglyLinkedListNodes(list);
    assert.equal(nodes[0], first);
    assert.equal(nodes[2], middle);
    assert.equal(nodes[4], last);
  });
});

describe("DoublyLinkedList_InsertValueAtIndex", () => {
  it("works for an empty list", () => {
    const list = makeDoublyLinkedList<number>([]);
    DoublyLinkedList_InsertValueAtIndex(list, 0, 1);
    assertDoublyLinkedListEquals(list, [1]);
  });

  it("works at the start, in the middle and at the end", () => {
    const list = makeDoublyLinkedList([2, 4]);
    DoublyLinkedList_InsertValueAtIndex(list, 0, 1);
    assertDoublyLinkedListEquals(list, [1, 2, 4]);
    DoublyLinkedList_InsertValueAtIndex(list, 2, 3);
    assertDoublyLinkedListEquals(list, [1, 2, 3, 4]);
    DoublyLinkedList_InsertValueAtIndex(list, 4, 5);
    assertDoublyLinkedListEquals(list, [1, 2, 3, 4, 5]);
  });
});

describe("DoublyLinkedList_InsertNodeAtIndex", () => {
  it("works for an empty list", () => {
    const list = makeDoublyLinkedList<number>([]);
    const node = new DoublyLinkedListNode(1);
    DoublyLinkedList_InsertNodeAtIndex(list, 0, node);
    assertDoublyLinkedListEquals(list, [1]);
    assert.equal(list.head, node);
    assert.equal(list.tail, node);
  });

  it("works at the start, in the middle and at the end", () => {
    const list = makeDoublyLinkedList([2, 4]);
    const first = new DoublyLinkedListNode(1);
    const middle = new DoublyLinkedListNode(3);
    const last = new DoublyLinkedListNode(5);

    DoublyLinkedList_InsertNodeAtIndex(list, 0, first);
    assertDoublyLinkedListEquals(list, [1, 2, 4]);
    DoublyLinkedList_InsertNodeAtIndex(list, 2, middle);
    assertDoublyLinkedListEquals(list, [1, 2, 3, 4]);
    DoublyLinkedList_InsertNodeAtIndex(list, 4, last);
    assertDoublyLinkedListEquals(list, [1, 2, 3, 4, 5]);

    const nodes = getDoublyLinkedListNodes(list);
    assert.equal(nodes[0], first);
    assert.equal(nodes[2], middle);
    assert.equal(nodes[4], last);
  });
});

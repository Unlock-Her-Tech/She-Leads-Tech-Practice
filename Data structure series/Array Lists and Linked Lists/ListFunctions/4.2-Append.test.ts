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
  getSinglyLinkedListNodes,
  makeArrayList,
  makeDoublyLinkedList,
  makeSinglyLinkedList,
} from "../TestHelpers/index.ts";
import {
  ArrayList_AppendValue,
  SinglyLinkedList_AppendValue,
  SinglyLinkedList_AppendNode,
  DoublyLinkedList_AppendValue,
  DoublyLinkedList_AppendNode,
} from "./4.2-Append.ts";

describe("ArrayList_AppendValue", () => {
  it("works for an empty array", () => {
    const list = makeArrayList<number>([]);
    ArrayList_AppendValue(list, 1);
    assertArrayListEquals(list, [1]);
  });

  it("works for an array with multiple elements", () => {
    const list = makeArrayList([1, 2]);
    ArrayList_AppendValue(list, 3);
    assertArrayListEquals(list, [1, 2, 3]);
  });

  it("works when the array is already at full capacity", () => {
    const list = makeArrayList([1, 2], 2);
    ArrayList_AppendValue(list, 3);
    assertArrayListEquals(list, [1, 2, 3]);
  });
});

describe("SinglyLinkedList_AppendValue", () => {
  it("works for an empty list", () => {
    const list = makeSinglyLinkedList<number>([]);
    SinglyLinkedList_AppendValue(list, 1);
    assertSinglyLinkedListEquals(list, [1]);
  });

  it("works for a list with multiple elements", () => {
    const list = makeSinglyLinkedList([1, 2]);
    SinglyLinkedList_AppendValue(list, 3);
    assertSinglyLinkedListEquals(list, [1, 2, 3]);
  });
});

describe("SinglyLinkedList_AppendNode", () => {
  it("works for an empty list", () => {
    const list = makeSinglyLinkedList<number>([]);
    const node = new SinglyLinkedListNode(1);
    SinglyLinkedList_AppendNode(list, node);
    assertSinglyLinkedListEquals(list, [1]);
    assert.equal(list.head, node);
  });

  it("works for a list with multiple elements", () => {
    const list = makeSinglyLinkedList([1, 2]);
    const node = new SinglyLinkedListNode(3);
    SinglyLinkedList_AppendNode(list, node);
    assertSinglyLinkedListEquals(list, [1, 2, 3]);
    const nodes = getSinglyLinkedListNodes(list);
    assert.equal(nodes[nodes.length - 1], node);
  });
});

describe("DoublyLinkedList_AppendValue", () => {
  it("works for an empty list", () => {
    const list = makeDoublyLinkedList<number>([]);
    DoublyLinkedList_AppendValue(list, 1);
    assertDoublyLinkedListEquals(list, [1]);
  });

  it("works for a list with multiple elements", () => {
    const list = makeDoublyLinkedList([1, 2]);
    DoublyLinkedList_AppendValue(list, 3);
    assertDoublyLinkedListEquals(list, [1, 2, 3]);
  });
});

describe("DoublyLinkedList_AppendNode", () => {
  it("works for an empty list", () => {
    const list = makeDoublyLinkedList<number>([]);
    const node = new DoublyLinkedListNode(1);
    DoublyLinkedList_AppendNode(list, node);
    assertDoublyLinkedListEquals(list, [1]);
    assert.equal(list.head, node);
    assert.equal(list.tail, node);
  });

  it("works for a list with multiple elements", () => {
    const list = makeDoublyLinkedList([1, 2]);
    const node = new DoublyLinkedListNode(3);
    DoublyLinkedList_AppendNode(list, node);
    assertDoublyLinkedListEquals(list, [1, 2, 3]);
    assert.equal(list.tail, node);
  });
});

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
  makeArrayList,
  makeDoublyLinkedList,
  makeSinglyLinkedList,
} from "../TestHelpers/index.ts";
import {
  ArrayList_PrependValue,
  SinglyLinkedList_PrependValue,
  SinglyLinkedList_PrependNode,
  DoublyLinkedList_PrependValue,
  DoublyLinkedList_PrependNode,
} from "./4.1-Prepend.ts";

describe("ArrayList_PrependValue", () => {
  it("works for an empty array", () => {
    const list = makeArrayList<number>([]);
    ArrayList_PrependValue(list, 1);
    assertArrayListEquals(list, [1]);
  });

  it("works for an array with multiple elements", () => {
    const list = makeArrayList([2, 3]);
    ArrayList_PrependValue(list, 1);
    assertArrayListEquals(list, [1, 2, 3]);
  });

  it("works when the array is already at full capacity", () => {
    const list = makeArrayList([2, 3], 2);
    ArrayList_PrependValue(list, 1);
    assertArrayListEquals(list, [1, 2, 3]);
  });
});

describe("SinglyLinkedList_PrependValue", () => {
  it("works for an empty list", () => {
    const list = makeSinglyLinkedList<number>([]);
    SinglyLinkedList_PrependValue(list, 1);
    assertSinglyLinkedListEquals(list, [1]);
  });

  it("works for a list with multiple elements", () => {
    const list = makeSinglyLinkedList([2, 3]);
    SinglyLinkedList_PrependValue(list, 1);
    assertSinglyLinkedListEquals(list, [1, 2, 3]);
  });
});

describe("SinglyLinkedList_PrependNode", () => {
  it("works for an empty list", () => {
    const list = makeSinglyLinkedList<number>([]);
    const node = new SinglyLinkedListNode(1);
    SinglyLinkedList_PrependNode(list, node);
    assertSinglyLinkedListEquals(list, [1]);
    assert.equal(list.head, node);
  });

  it("works for a list with multiple elements", () => {
    const list = makeSinglyLinkedList([2, 3]);
    const node = new SinglyLinkedListNode(1);
    SinglyLinkedList_PrependNode(list, node);
    assertSinglyLinkedListEquals(list, [1, 2, 3]);
    assert.equal(list.head, node);
  });
});

describe("DoublyLinkedList_PrependValue", () => {
  it("works for an empty list", () => {
    const list = makeDoublyLinkedList<number>([]);
    DoublyLinkedList_PrependValue(list, 1);
    assertDoublyLinkedListEquals(list, [1]);
  });

  it("works for a list with multiple elements", () => {
    const list = makeDoublyLinkedList([2, 3]);
    DoublyLinkedList_PrependValue(list, 1);
    assertDoublyLinkedListEquals(list, [1, 2, 3]);
  });
});

describe("DoublyLinkedList_PrependNode", () => {
  it("works for an empty list", () => {
    const list = makeDoublyLinkedList<number>([]);
    const node = new DoublyLinkedListNode(1);
    DoublyLinkedList_PrependNode(list, node);
    assertDoublyLinkedListEquals(list, [1]);
    assert.equal(list.head, node);
    assert.equal(list.tail, node);
  });

  it("works for a list with multiple elements", () => {
    const list = makeDoublyLinkedList([2, 3]);
    const node = new DoublyLinkedListNode(1);
    DoublyLinkedList_PrependNode(list, node);
    assertDoublyLinkedListEquals(list, [1, 2, 3]);
    assert.equal(list.head, node);
  });
});

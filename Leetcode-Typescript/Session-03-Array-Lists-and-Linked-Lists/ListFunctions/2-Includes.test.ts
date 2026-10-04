// Tests so you can see whether your implemented functionality is working.
// You shouldn't edit these permanently, but feel free to do so temporarily.

import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { SinglyLinkedListNode } from "../ListDataStructures/SinglyLinkedList.ts";
import { DoublyLinkedListNode } from "../ListDataStructures/DoublyLinkedList.ts";
import {
  getDoublyLinkedListNodes,
  getSinglyLinkedListNodes,
  makeArrayList,
  makeDoublyLinkedList,
  makeSinglyLinkedList,
} from "../TestHelpers/index.ts";
import {
  ArrayList_IncludesValue,
  SinglyLinkedList_IncludesValue,
  SinglyLinkedList_IncludesNode,
  DoublyLinkedList_IncludesValue,
  DoublyLinkedList_IncludesNode,
} from "./2-Includes.ts";

describe("ArrayList_IncludesValue", () => {
  it("returns true for values that are in the array", () => {
    const list = makeArrayList([1, 2, 3]);
    assert.equal(ArrayList_IncludesValue(list, 1), true);
    assert.equal(ArrayList_IncludesValue(list, 2), true);
    assert.equal(ArrayList_IncludesValue(list, 3), true);
  });

  it("returns false for a value that is not in the array", () => {
    const list = makeArrayList([1, 2, 3]);
    assert.equal(ArrayList_IncludesValue(list, 4), false);
  });

  it("returns false for an empty array", () => {
    const list = makeArrayList<number>([]);
    assert.equal(ArrayList_IncludesValue(list, 1), false);
  });
});

describe("SinglyLinkedList_IncludesValue", () => {
  it("returns true for values that are in the list", () => {
    const list = makeSinglyLinkedList([1, 2, 3]);
    assert.equal(SinglyLinkedList_IncludesValue(list, 1), true);
    assert.equal(SinglyLinkedList_IncludesValue(list, 2), true);
    assert.equal(SinglyLinkedList_IncludesValue(list, 3), true);
  });

  it("returns false for a value that is not in the list", () => {
    const list = makeSinglyLinkedList([1, 2, 3]);
    assert.equal(SinglyLinkedList_IncludesValue(list, 4), false);
  });

  it("returns false for an empty list", () => {
    const list = makeSinglyLinkedList<number>([]);
    assert.equal(SinglyLinkedList_IncludesValue(list, 1), false);
  });
});

describe("SinglyLinkedList_IncludesNode", () => {
  it("returns true for nodes that are in the list", () => {
    const list = makeSinglyLinkedList([1, 2, 3]);
    for (const node of getSinglyLinkedListNodes(list)) {
      assert.equal(SinglyLinkedList_IncludesNode(list, node), true);
    }
  });

  it("returns false for a node that is not in the list, even if it has the same value", () => {
    const list = makeSinglyLinkedList([1, 2, 3]);
    const otherNode = new SinglyLinkedListNode(2);
    assert.equal(SinglyLinkedList_IncludesNode(list, otherNode), false);
  });

  it("returns false for an empty list", () => {
    const list = makeSinglyLinkedList<number>([]);
    const node = new SinglyLinkedListNode(1);
    assert.equal(SinglyLinkedList_IncludesNode(list, node), false);
  });
});

describe("DoublyLinkedList_IncludesValue", () => {
  it("returns true for values that are in the list", () => {
    const list = makeDoublyLinkedList([1, 2, 3]);
    assert.equal(DoublyLinkedList_IncludesValue(list, 1), true);
    assert.equal(DoublyLinkedList_IncludesValue(list, 2), true);
    assert.equal(DoublyLinkedList_IncludesValue(list, 3), true);
  });

  it("returns false for a value that is not in the list", () => {
    const list = makeDoublyLinkedList([1, 2, 3]);
    assert.equal(DoublyLinkedList_IncludesValue(list, 4), false);
  });

  it("returns false for an empty list", () => {
    const list = makeDoublyLinkedList<number>([]);
    assert.equal(DoublyLinkedList_IncludesValue(list, 1), false);
  });
});

describe("DoublyLinkedList_IncludesNode", () => {
  it("returns true for nodes that are in the list", () => {
    const list = makeDoublyLinkedList([1, 2, 3]);
    for (const node of getDoublyLinkedListNodes(list)) {
      assert.equal(DoublyLinkedList_IncludesNode(list, node), true);
    }
  });

  it("returns false for a node that is not in the list, even if it has the same value", () => {
    const list = makeDoublyLinkedList([1, 2, 3]);
    const otherNode = new DoublyLinkedListNode(2);
    assert.equal(DoublyLinkedList_IncludesNode(list, otherNode), false);
  });

  it("returns false for an empty list", () => {
    const list = makeDoublyLinkedList<number>([]);
    const node = new DoublyLinkedListNode(1);
    assert.equal(DoublyLinkedList_IncludesNode(list, node), false);
  });
});

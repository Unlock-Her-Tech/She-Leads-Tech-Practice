// Tests so you can see whether your implemented functionality is working.
// You shouldn't edit these permanently, but feel free to do so temporarily.

import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
  getDoublyLinkedListNodes,
  getSinglyLinkedListNodes,
  makeArrayList,
  makeDoublyLinkedList,
  makeSinglyLinkedList,
} from "../TestHelpers/index.ts";
import {
  ArrayList_GetValueAtIndex,
  SinglyLinkedList_GetNodeAtIndex,
  SinglyLinkedList_GetValueAtIndex,
  DoublyLinkedList_GetNodeAtIndex,
  DoublyLinkedList_GetValueAtIndex,
} from "./1.3-GetAtIndex.ts";

describe("ArrayList_GetValueAtIndex", () => {
  it("works for the first, a middle and the last element", () => {
    const list = makeArrayList([10, 20, 30]);
    assert.equal(ArrayList_GetValueAtIndex(list, 0), 10);
    assert.equal(ArrayList_GetValueAtIndex(list, 1), 20);
    assert.equal(ArrayList_GetValueAtIndex(list, 2), 30);
  });

  it("returns undefined for an out-of-range index", () => {
    const list = makeArrayList([10, 20, 30]);
    assert.equal(ArrayList_GetValueAtIndex(list, 3), undefined);
    assert.equal(ArrayList_GetValueAtIndex(list, -1), undefined);
  });

  it("returns undefined for an empty array", () => {
    const list = makeArrayList<number>([]);
    assert.equal(ArrayList_GetValueAtIndex(list, 0), undefined);
  });
});

describe("SinglyLinkedList_GetNodeAtIndex", () => {
  it("works for the first, a middle and the last node", () => {
    const list = makeSinglyLinkedList([10, 20, 30]);
    const nodes = getSinglyLinkedListNodes(list);
    assert.equal(SinglyLinkedList_GetNodeAtIndex(list, 0), nodes[0]);
    assert.equal(SinglyLinkedList_GetNodeAtIndex(list, 1), nodes[1]);
    assert.equal(SinglyLinkedList_GetNodeAtIndex(list, 2), nodes[2]);
  });

  it("returns null for an out-of-range index", () => {
    const list = makeSinglyLinkedList([10, 20, 30]);
    assert.equal(SinglyLinkedList_GetNodeAtIndex(list, 3), null);
    assert.equal(SinglyLinkedList_GetNodeAtIndex(list, -1), null);
  });

  it("returns null for an empty list", () => {
    const list = makeSinglyLinkedList<number>([]);
    assert.equal(SinglyLinkedList_GetNodeAtIndex(list, 0), null);
  });
});

describe("SinglyLinkedList_GetValueAtIndex", () => {
  it("works for the first, a middle and the last element", () => {
    const list = makeSinglyLinkedList([10, 20, 30]);
    assert.equal(SinglyLinkedList_GetValueAtIndex(list, 0), 10);
    assert.equal(SinglyLinkedList_GetValueAtIndex(list, 1), 20);
    assert.equal(SinglyLinkedList_GetValueAtIndex(list, 2), 30);
  });

  it("returns undefined for an out-of-range index", () => {
    const list = makeSinglyLinkedList([10, 20, 30]);
    assert.equal(SinglyLinkedList_GetValueAtIndex(list, 3), undefined);
    assert.equal(SinglyLinkedList_GetValueAtIndex(list, -1), undefined);
  });

  it("returns undefined for an empty list", () => {
    const list = makeSinglyLinkedList<number>([]);
    assert.equal(SinglyLinkedList_GetValueAtIndex(list, 0), undefined);
  });
});

describe("DoublyLinkedList_GetNodeAtIndex", () => {
  it("works for the first, a middle and the last node", () => {
    const list = makeDoublyLinkedList([10, 20, 30]);
    const nodes = getDoublyLinkedListNodes(list);
    assert.equal(DoublyLinkedList_GetNodeAtIndex(list, 0), nodes[0]);
    assert.equal(DoublyLinkedList_GetNodeAtIndex(list, 1), nodes[1]);
    assert.equal(DoublyLinkedList_GetNodeAtIndex(list, 2), nodes[2]);
  });

  it("returns null for an out-of-range index", () => {
    const list = makeDoublyLinkedList([10, 20, 30]);
    assert.equal(DoublyLinkedList_GetNodeAtIndex(list, 3), null);
    assert.equal(DoublyLinkedList_GetNodeAtIndex(list, -1), null);
  });

  it("returns null for an empty list", () => {
    const list = makeDoublyLinkedList<number>([]);
    assert.equal(DoublyLinkedList_GetNodeAtIndex(list, 0), null);
  });
});

describe("DoublyLinkedList_GetValueAtIndex", () => {
  it("works for the first, a middle and the last element", () => {
    const list = makeDoublyLinkedList([10, 20, 30]);
    assert.equal(DoublyLinkedList_GetValueAtIndex(list, 0), 10);
    assert.equal(DoublyLinkedList_GetValueAtIndex(list, 1), 20);
    assert.equal(DoublyLinkedList_GetValueAtIndex(list, 2), 30);
  });

  it("returns undefined for an out-of-range index", () => {
    const list = makeDoublyLinkedList([10, 20, 30]);
    assert.equal(DoublyLinkedList_GetValueAtIndex(list, 3), undefined);
    assert.equal(DoublyLinkedList_GetValueAtIndex(list, -1), undefined);
  });

  it("returns undefined for an empty list", () => {
    const list = makeDoublyLinkedList<number>([]);
    assert.equal(DoublyLinkedList_GetValueAtIndex(list, 0), undefined);
  });
});

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
  ArrayList_GetLastValue,
  SinglyLinkedList_GetLastNode,
  SinglyLinkedList_GetLastValue,
  DoublyLinkedList_GetLastNode,
  DoublyLinkedList_GetLastValue,
} from "./1.2-GetLast.ts";

describe("ArrayList_GetLastValue", () => {
  it("works for an empty array", () => {
    const list = makeArrayList<number>([]);
    assert.equal(ArrayList_GetLastValue(list), undefined);
  });

  it("works for a singleton array", () => {
    const list = makeArrayList([1]);
    assert.equal(ArrayList_GetLastValue(list), 1);
  });

  it("works for an array with multiple elements", () => {
    const list = makeArrayList([1, 2, 3]);
    assert.equal(ArrayList_GetLastValue(list), 3);
  });
});

describe("SinglyLinkedList_GetLastNode", () => {
  it("works for an empty list", () => {
    const list = makeSinglyLinkedList<number>([]);
    assert.equal(SinglyLinkedList_GetLastNode(list), null);
  });

  it("works for a singleton list", () => {
    const list = makeSinglyLinkedList([1]);
    assert.equal(SinglyLinkedList_GetLastNode(list), list.head);
  });

  it("works for a list with multiple elements", () => {
    const list = makeSinglyLinkedList([1, 2, 3]);
    const nodes = getSinglyLinkedListNodes(list);
    assert.equal(SinglyLinkedList_GetLastNode(list), nodes[2]);
  });
});

describe("SinglyLinkedList_GetLastValue", () => {
  it("works for an empty list", () => {
    const list = makeSinglyLinkedList<number>([]);
    assert.equal(SinglyLinkedList_GetLastValue(list), undefined);
  });

  it("works for a singleton list", () => {
    const list = makeSinglyLinkedList([1]);
    assert.equal(SinglyLinkedList_GetLastValue(list), 1);
  });

  it("works for a list with multiple elements", () => {
    const list = makeSinglyLinkedList([1, 2, 3]);
    assert.equal(SinglyLinkedList_GetLastValue(list), 3);
  });
});

describe("DoublyLinkedList_GetLastNode", () => {
  it("works for an empty list", () => {
    const list = makeDoublyLinkedList<number>([]);
    assert.equal(DoublyLinkedList_GetLastNode(list), null);
  });

  it("works for a singleton list", () => {
    const list = makeDoublyLinkedList([1]);
    assert.equal(DoublyLinkedList_GetLastNode(list), list.head);
  });

  it("works for a list with multiple elements", () => {
    const list = makeDoublyLinkedList([1, 2, 3]);
    const nodes = getDoublyLinkedListNodes(list);
    assert.equal(DoublyLinkedList_GetLastNode(list), nodes[2]);
  });
});

describe("DoublyLinkedList_GetLastValue", () => {
  it("works for an empty list", () => {
    const list = makeDoublyLinkedList<number>([]);
    assert.equal(DoublyLinkedList_GetLastValue(list), undefined);
  });

  it("works for a singleton list", () => {
    const list = makeDoublyLinkedList([1]);
    assert.equal(DoublyLinkedList_GetLastValue(list), 1);
  });

  it("works for a list with multiple elements", () => {
    const list = makeDoublyLinkedList([1, 2, 3]);
    assert.equal(DoublyLinkedList_GetLastValue(list), 3);
  });
});

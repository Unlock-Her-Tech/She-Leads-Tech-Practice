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
  ArrayList_LastIndexOfValue,
  SinglyLinkedList_LastIndexOfValue,
  SinglyLinkedList_LastIndexOfNode,
  DoublyLinkedList_LastIndexOfValue,
  DoublyLinkedList_LastIndexOfNode,
} from "./3.2-LastIndexOf.ts";

describe("ArrayList_LastIndexOfValue", () => {
  it("finds the index of values that are in the array", () => {
    const list = makeArrayList([5, 6, 7]);
    assert.equal(ArrayList_LastIndexOfValue(list, 5), 0);
    assert.equal(ArrayList_LastIndexOfValue(list, 6), 1);
    assert.equal(ArrayList_LastIndexOfValue(list, 7), 2);
  });

  it("finds the last occurrence of a duplicated value", () => {
    const list = makeArrayList([5, 6, 6, 5]);
    assert.equal(ArrayList_LastIndexOfValue(list, 6), 2);
    assert.equal(ArrayList_LastIndexOfValue(list, 5), 3);
  });

  it("returns -1 for a value that is not in the array", () => {
    const list = makeArrayList([5, 6, 7]);
    assert.equal(ArrayList_LastIndexOfValue(list, 8), -1);
  });

  it("returns -1 for an empty array", () => {
    const list = makeArrayList<number>([]);
    assert.equal(ArrayList_LastIndexOfValue(list, 5), -1);
  });
});

describe("SinglyLinkedList_LastIndexOfValue", () => {
  it("finds the index of values that are in the list", () => {
    const list = makeSinglyLinkedList([5, 6, 7]);
    assert.equal(SinglyLinkedList_LastIndexOfValue(list, 5), 0);
    assert.equal(SinglyLinkedList_LastIndexOfValue(list, 6), 1);
    assert.equal(SinglyLinkedList_LastIndexOfValue(list, 7), 2);
  });

  it("finds the last occurrence of a duplicated value", () => {
    const list = makeSinglyLinkedList([5, 6, 6, 5]);
    assert.equal(SinglyLinkedList_LastIndexOfValue(list, 6), 2);
    assert.equal(SinglyLinkedList_LastIndexOfValue(list, 5), 3);
  });

  it("returns -1 for a value that is not in the list", () => {
    const list = makeSinglyLinkedList([5, 6, 7]);
    assert.equal(SinglyLinkedList_LastIndexOfValue(list, 8), -1);
  });

  it("returns -1 for an empty list", () => {
    const list = makeSinglyLinkedList<number>([]);
    assert.equal(SinglyLinkedList_LastIndexOfValue(list, 5), -1);
  });
});

describe("SinglyLinkedList_LastIndexOfNode", () => {
  it("finds the index of nodes that are in the list", () => {
    const list = makeSinglyLinkedList([5, 6, 7]);
    const nodes = getSinglyLinkedListNodes(list);
    assert.equal(SinglyLinkedList_LastIndexOfNode(list, nodes[0]), 0);
    assert.equal(SinglyLinkedList_LastIndexOfNode(list, nodes[1]), 1);
    assert.equal(SinglyLinkedList_LastIndexOfNode(list, nodes[2]), 2);
  });

  it("returns -1 for a node that is not in the list, even if it has the same value", () => {
    const list = makeSinglyLinkedList([5, 6, 7]);
    const otherNode = new SinglyLinkedListNode(6);
    assert.equal(SinglyLinkedList_LastIndexOfNode(list, otherNode), -1);
  });

  it("returns -1 for an empty list", () => {
    const list = makeSinglyLinkedList<number>([]);
    const node = new SinglyLinkedListNode(5);
    assert.equal(SinglyLinkedList_LastIndexOfNode(list, node), -1);
  });
});

describe("DoublyLinkedList_LastIndexOfValue", () => {
  it("finds the index of values that are in the list", () => {
    const list = makeDoublyLinkedList([5, 6, 7]);
    assert.equal(DoublyLinkedList_LastIndexOfValue(list, 5), 0);
    assert.equal(DoublyLinkedList_LastIndexOfValue(list, 6), 1);
    assert.equal(DoublyLinkedList_LastIndexOfValue(list, 7), 2);
  });

  it("finds the last occurrence of a duplicated value", () => {
    const list = makeDoublyLinkedList([5, 6, 6, 5]);
    assert.equal(DoublyLinkedList_LastIndexOfValue(list, 6), 2);
    assert.equal(DoublyLinkedList_LastIndexOfValue(list, 5), 3);
  });

  it("returns -1 for a value that is not in the list", () => {
    const list = makeDoublyLinkedList([5, 6, 7]);
    assert.equal(DoublyLinkedList_LastIndexOfValue(list, 8), -1);
  });

  it("returns -1 for an empty list", () => {
    const list = makeDoublyLinkedList<number>([]);
    assert.equal(DoublyLinkedList_LastIndexOfValue(list, 5), -1);
  });
});

describe("DoublyLinkedList_LastIndexOfNode", () => {
  it("finds the index of nodes that are in the list", () => {
    const list = makeDoublyLinkedList([5, 6, 7]);
    const nodes = getDoublyLinkedListNodes(list);
    assert.equal(DoublyLinkedList_LastIndexOfNode(list, nodes[0]), 0);
    assert.equal(DoublyLinkedList_LastIndexOfNode(list, nodes[1]), 1);
    assert.equal(DoublyLinkedList_LastIndexOfNode(list, nodes[2]), 2);
  });

  it("returns -1 for a node that is not in the list, even if it has the same value", () => {
    const list = makeDoublyLinkedList([5, 6, 7]);
    const otherNode = new DoublyLinkedListNode(6);
    assert.equal(DoublyLinkedList_LastIndexOfNode(list, otherNode), -1);
  });

  it("returns -1 for an empty list", () => {
    const list = makeDoublyLinkedList<number>([]);
    const node = new DoublyLinkedListNode(5);
    assert.equal(DoublyLinkedList_LastIndexOfNode(list, node), -1);
  });
});

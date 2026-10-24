// Tests so you can see whether your implemented functionality is working.
// You shouldn't edit these permanently, but feel free to do so temporarily.

import { describe, it } from "node:test";

import {
  assertArrayListEquals,
  assertDoublyLinkedListEquals,
  assertSinglyLinkedListEquals,
  makeArrayList,
  makeDoublyLinkedList,
  makeSinglyLinkedList,
} from "../TestHelpers/index.ts";
import {
  ArrayList_RemoveAtIndex,
  SinglyLinkedList_RemoveAtIndex,
  DoublyLinkedList_RemoveAtIndex,
} from "./5.3-RemoveAtIndex.ts";

describe("ArrayList_RemoveAtIndex", () => {
  it("works for a singleton array", () => {
    const list = makeArrayList([1]);
    ArrayList_RemoveAtIndex(list, 0);
    assertArrayListEquals(list, []);
  });

  it("works at the start, in the middle and at the end", () => {
    const list = makeArrayList([1, 2, 3, 4, 5]);
    ArrayList_RemoveAtIndex(list, 0);
    assertArrayListEquals(list, [2, 3, 4, 5]);
    ArrayList_RemoveAtIndex(list, 1);
    assertArrayListEquals(list, [2, 4, 5]);
    ArrayList_RemoveAtIndex(list, 2);
    assertArrayListEquals(list, [2, 4]);
  });
});

describe("SinglyLinkedList_RemoveAtIndex", () => {
  it("works for a singleton list", () => {
    const list = makeSinglyLinkedList([1]);
    SinglyLinkedList_RemoveAtIndex(list, 0);
    assertSinglyLinkedListEquals(list, []);
  });

  it("works at the start, in the middle and at the end", () => {
    const list = makeSinglyLinkedList([1, 2, 3, 4, 5]);
    SinglyLinkedList_RemoveAtIndex(list, 0);
    assertSinglyLinkedListEquals(list, [2, 3, 4, 5]);
    SinglyLinkedList_RemoveAtIndex(list, 1);
    assertSinglyLinkedListEquals(list, [2, 4, 5]);
    SinglyLinkedList_RemoveAtIndex(list, 2);
    assertSinglyLinkedListEquals(list, [2, 4]);
  });
});

describe("DoublyLinkedList_RemoveAtIndex", () => {
  it("works for a singleton list", () => {
    const list = makeDoublyLinkedList([1]);
    DoublyLinkedList_RemoveAtIndex(list, 0);
    assertDoublyLinkedListEquals(list, []);
  });

  it("works at the start, in the middle and at the end", () => {
    const list = makeDoublyLinkedList([1, 2, 3, 4, 5]);
    DoublyLinkedList_RemoveAtIndex(list, 0);
    assertDoublyLinkedListEquals(list, [2, 3, 4, 5]);
    DoublyLinkedList_RemoveAtIndex(list, 1);
    assertDoublyLinkedListEquals(list, [2, 4, 5]);
    DoublyLinkedList_RemoveAtIndex(list, 2);
    assertDoublyLinkedListEquals(list, [2, 4]);
  });
});

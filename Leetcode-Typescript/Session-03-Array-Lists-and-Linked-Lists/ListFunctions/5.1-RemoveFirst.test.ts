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
  ArrayList_RemoveFirst,
  SinglyLinkedList_RemoveFirst,
  DoublyLinkedList_RemoveFirst,
} from "./5.1-RemoveFirst.ts";

describe("ArrayList_RemoveFirst", () => {
  it("leaves an empty array empty", () => {
    const list = makeArrayList<number>([]);
    ArrayList_RemoveFirst(list);
    assertArrayListEquals(list, []);
  });

  it("works for a singleton array", () => {
    const list = makeArrayList([1]);
    ArrayList_RemoveFirst(list);
    assertArrayListEquals(list, []);
  });

  it("works for an array with multiple elements", () => {
    const list = makeArrayList([1, 2, 3]);
    ArrayList_RemoveFirst(list);
    assertArrayListEquals(list, [2, 3]);
  });
});

describe("SinglyLinkedList_RemoveFirst", () => {
  it("leaves an empty list empty", () => {
    const list = makeSinglyLinkedList<number>([]);
    SinglyLinkedList_RemoveFirst(list);
    assertSinglyLinkedListEquals(list, []);
  });

  it("works for a singleton list", () => {
    const list = makeSinglyLinkedList([1]);
    SinglyLinkedList_RemoveFirst(list);
    assertSinglyLinkedListEquals(list, []);
  });

  it("works for a list with multiple elements", () => {
    const list = makeSinglyLinkedList([1, 2, 3]);
    SinglyLinkedList_RemoveFirst(list);
    assertSinglyLinkedListEquals(list, [2, 3]);
  });
});

describe("DoublyLinkedList_RemoveFirst", () => {
  it("leaves an empty list empty", () => {
    const list = makeDoublyLinkedList<number>([]);
    DoublyLinkedList_RemoveFirst(list);
    assertDoublyLinkedListEquals(list, []);
  });

  it("works for a singleton list", () => {
    const list = makeDoublyLinkedList([1]);
    DoublyLinkedList_RemoveFirst(list);
    assertDoublyLinkedListEquals(list, []);
  });

  it("works for a list with multiple elements", () => {
    const list = makeDoublyLinkedList([1, 2, 3]);
    DoublyLinkedList_RemoveFirst(list);
    assertDoublyLinkedListEquals(list, [2, 3]);
  });
});

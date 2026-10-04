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
  ArrayList_RemoveLast,
  SinglyLinkedList_RemoveLast,
  DoublyLinkedList_RemoveLast,
} from "./5.2-RemoveLast.ts";

describe("ArrayList_RemoveLast", () => {
  it("leaves an empty array empty", () => {
    const list = makeArrayList<number>([]);
    ArrayList_RemoveLast(list);
    assertArrayListEquals(list, []);
  });

  it("works for a singleton array", () => {
    const list = makeArrayList([1]);
    ArrayList_RemoveLast(list);
    assertArrayListEquals(list, []);
  });

  it("works for an array with multiple elements", () => {
    const list = makeArrayList([1, 2, 3]);
    ArrayList_RemoveLast(list);
    assertArrayListEquals(list, [1, 2]);
  });
});

describe("SinglyLinkedList_RemoveLast", () => {
  it("leaves an empty list empty", () => {
    const list = makeSinglyLinkedList<number>([]);
    SinglyLinkedList_RemoveLast(list);
    assertSinglyLinkedListEquals(list, []);
  });

  it("works for a singleton list", () => {
    const list = makeSinglyLinkedList([1]);
    SinglyLinkedList_RemoveLast(list);
    assertSinglyLinkedListEquals(list, []);
  });

  it("works for a list with multiple elements", () => {
    const list = makeSinglyLinkedList([1, 2, 3]);
    SinglyLinkedList_RemoveLast(list);
    assertSinglyLinkedListEquals(list, [1, 2]);
  });
});

describe("DoublyLinkedList_RemoveLast", () => {
  it("leaves an empty list empty", () => {
    const list = makeDoublyLinkedList<number>([]);
    DoublyLinkedList_RemoveLast(list);
    assertDoublyLinkedListEquals(list, []);
  });

  it("works for a singleton list", () => {
    const list = makeDoublyLinkedList([1]);
    DoublyLinkedList_RemoveLast(list);
    assertDoublyLinkedListEquals(list, []);
  });

  it("works for a list with multiple elements", () => {
    const list = makeDoublyLinkedList([1, 2, 3]);
    DoublyLinkedList_RemoveLast(list);
    assertDoublyLinkedListEquals(list, [1, 2]);
  });
});

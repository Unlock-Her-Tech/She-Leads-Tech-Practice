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
  ArrayList_Reverse,
  SinglyLinkedList_Reverse,
  DoublyLinkedList_Reverse,
} from "./6-Reverse.ts";

describe("ArrayList_Reverse", () => {
  it("works for an empty array", () => {
    const list = makeArrayList<number>([]);
    ArrayList_Reverse(list);
    assertArrayListEquals(list, []);
  });

  it("works for a singleton array", () => {
    const list = makeArrayList([1]);
    ArrayList_Reverse(list);
    assertArrayListEquals(list, [1]);
  });

  it("works for arrays with an odd and an even number of elements", () => {
    const oddList = makeArrayList([1, 2, 3]);
    ArrayList_Reverse(oddList);
    assertArrayListEquals(oddList, [3, 2, 1]);

    const evenList = makeArrayList([1, 2, 3, 4]);
    ArrayList_Reverse(evenList);
    assertArrayListEquals(evenList, [4, 3, 2, 1]);
  });
});

describe("SinglyLinkedList_Reverse", () => {
  it("works for an empty list", () => {
    const list = makeSinglyLinkedList<number>([]);
    SinglyLinkedList_Reverse(list);
    assertSinglyLinkedListEquals(list, []);
  });

  it("works for a singleton list", () => {
    const list = makeSinglyLinkedList([1]);
    SinglyLinkedList_Reverse(list);
    assertSinglyLinkedListEquals(list, [1]);
  });

  it("works for lists with an odd and an even number of elements", () => {
    const oddList = makeSinglyLinkedList([1, 2, 3]);
    SinglyLinkedList_Reverse(oddList);
    assertSinglyLinkedListEquals(oddList, [3, 2, 1]);

    const evenList = makeSinglyLinkedList([1, 2, 3, 4]);
    SinglyLinkedList_Reverse(evenList);
    assertSinglyLinkedListEquals(evenList, [4, 3, 2, 1]);
  });
});

describe("DoublyLinkedList_Reverse", () => {
  it("works for an empty list", () => {
    const list = makeDoublyLinkedList<number>([]);
    DoublyLinkedList_Reverse(list);
    assertDoublyLinkedListEquals(list, []);
  });

  it("works for a singleton list", () => {
    const list = makeDoublyLinkedList([1]);
    DoublyLinkedList_Reverse(list);
    assertDoublyLinkedListEquals(list, [1]);
  });

  it("works for lists with an odd and an even number of elements", () => {
    const oddList = makeDoublyLinkedList([1, 2, 3]);
    DoublyLinkedList_Reverse(oddList);
    assertDoublyLinkedListEquals(oddList, [3, 2, 1]);

    const evenList = makeDoublyLinkedList([1, 2, 3, 4]);
    DoublyLinkedList_Reverse(evenList);
    assertDoublyLinkedListEquals(evenList, [4, 3, 2, 1]);
  });
});

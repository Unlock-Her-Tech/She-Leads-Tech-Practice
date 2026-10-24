import { ArrayList } from "../ListDataStructures/ArrayList.ts";
import {
  SinglyLinkedList,
  SinglyLinkedListNode,
} from "../ListDataStructures/SinglyLinkedList.ts";
import {
  DoublyLinkedList,
  DoublyLinkedListNode,
} from "../ListDataStructures/DoublyLinkedList.ts";

export function ArrayList_GetFirstValue<T>(list: ArrayList<T>): T | undefined {
  return list[0];
}

export function SinglyLinkedList_GetFirstNode<T>(
  list: SinglyLinkedList<T>,
): SinglyLinkedListNode<T> | null {
  return list.head;
}

export function SinglyLinkedList_GetFirstValue<T>(
  list: SinglyLinkedList<T>,
): T | undefined {
  return list.head?.value;
}

export function DoublyLinkedList_GetFirstNode<T>(
  list: DoublyLinkedList<T>,
): DoublyLinkedListNode<T> | null {
  return list.head;
}

export function DoublyLinkedList_GetFirstValue<T>(
  list: DoublyLinkedList<T>,
): T | undefined {
  return list.head?.value;
}

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const result: ListNode = null;
  if (l1 === null) return l2;
  if (l2 === null) return l1;
  if (l1.value < l2.value) {
    l1.next = mergeTwoLists(l1, l2);
  }
  return result;
}

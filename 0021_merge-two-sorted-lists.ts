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
  const sentinel: ListNode = new ListNode(-1, null);

  let head: ListNode = sentinel;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      head.next = l1;
      l1 = l1.next;
    } else {
      head.next = l2;
      l2 = l2.next;
    }

    head = head.next;
  }

  head.next = l1 || l2;

  return sentinel.next;

  // if (l1 === null) return l2;
  // if (l2 === null) return l1;
  // if (l1.val < l2.val) {
  //   l1.next = mergeTwoLists(l1.next, l2);
  //   return l1;
  // } else {
  //   l2.next = mergeTwoLists(l2.next, l1);
  //   return l2;
  // }
}

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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let sentinel = head;
  while (sentinel !== null && sentinel.next !== null) {
    if (head.val === head.next.val) {
      sentinel.next = head.next.next;
    } else {
      sentinel = head.next;
    }
  }
  return sentinel;
}

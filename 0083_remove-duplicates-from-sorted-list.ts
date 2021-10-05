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
  // let sentinel = head;
  // while (sentinel !== null && sentinel.next !== null) {
  //   if (sentinel.val === sentinel.next.val) {
  //     sentinel.next = sentinel.next.next;
  //   } else {
  //     sentinel = sentinel.next;
  //   }
  // }

  while (sentinel !== null && sentinel.next !== null) {
    if (sentinel.val === sentinel.next.val) {
      sentinel.next = sentinel.next.next;
    } else {
      sentinel = sentinel.next;
    }
  }
  return head;
}

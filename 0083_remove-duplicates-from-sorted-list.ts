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
    if (sentinel.val === sentinel.next.val) {
      sentinel.next = sentinel.next.next;
    } else {
      sentinel = sentinel.next;
    }
  }

  // while (head !== null && head.next !== null) {
  //   if (head.val === head.next.val) {
  //     head.next = head.next.next;
  //   } else {
  //     head = head.next;
  //   }
  // }

  return head;
}

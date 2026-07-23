/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
        const dummy = new ListNode(0);
        let tail = dummy;

        let aCurr = list1;
        let bCurr = list2;

        while (aCurr !== null && bCurr !== null) {
            if (aCurr.val <= bCurr.val) {
                tail.next = aCurr;
                aCurr = aCurr.next;
            } else {
                tail.next = bCurr;
                bCurr = bCurr.next;
            }

            tail = tail.next;
        }

        // Attach the remaining nodes
        if (aCurr !== null) {
            tail.next = aCurr;
        } else {
            tail.next = bCurr;
        }

        return dummy.next;
    }
}

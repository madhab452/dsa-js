import { FromArray, ListNode, Print } from "../../common/linkedlist/linkedlist";


function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let c1 = list1;
    let c2 = list2;
    let res: ListNode | null = new ListNode();
    let current = res;

    while (c1 != null || c2 != null) {
      if (c1 != null && c2 != null) {
        if (c1.val < c2.val){
          current.next = new ListNode(c1.val)
          c1 = c1.next
        } else {
          current.next = new ListNode(c2.val)
          c2 = c2.next
        }
        current = current.next
        continue
      }

      if (c1 != null) {
        current.next = new ListNode(c1.val)
        c1 = c1.next
        current = current.next
      } 
      if (c2 != null) {
        current.next = new ListNode(c2.val)
        c2 = c2.next  
        current = current.next
      }
    }

    return res.next
};

function index() {
  let l1  = [1,2,4]
  let l2 = [1,3,4]
  let res = mergeTwoLists(FromArray(l1), FromArray(l2))
  Print(res)
}

index()
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val
    this.next = next
  }
}

// Array ko Linked List me convert karne ke liye
function arrayToLinkedList(arr) {
  let dummy = new ListNode(0)
  let current = dummy

  for (let value of arr) {
    current.next = new ListNode(value)
    current = current.next
  }

  return dummy.next
}

// Linked List ko print karne ke liye
function printLinkedList(head) {
  let result = []

  while (head !== null) {
    result.push(head.val)
    head = head.next
  }

  console.log(result)
}

var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(0)
  let current = dummy

  while (list1 !== null && list2 !== null) {

    if (list1.val <= list2.val) {
      current.next = list1
      list1 = list1.next
    } else {
      current.next = list2
      list2 = list2.next
    }

    current = current.next
  }

  current.next = list1 || list2

  return dummy.next
}

let list1 = arrayToLinkedList([1, 2, 4])
let list2 = arrayToLinkedList([1, 3, 4])

let mergedList = mergeTwoLists(list1, list2)

printLinkedList(mergedList)
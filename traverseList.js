class Node {
  constructor(val = 0, next = null) {
    this.val = val
    this.next = next
  }
}

//create node
let first = new Node(10)
let second = new Node(20)
let third = new Node(30)

//connect node
first.next = second
second.next = third
third.next = null

// console.log(first)

//print the list
let temp = first
while (temp != null) {
  console.log(temp.val)
  temp = temp.next
}


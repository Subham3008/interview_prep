//insert a node before head and make that node head

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  //insert node before head
  insertNode(data) {
    const newNode = new Node(data)

    newNode.next = this.head
    this.head = newNode
  }

  // Print linked list
  print() {
    let current = this.head

    while (current !== null) {
      console.log(current.data)
      current = current.next
    }

  }
}

const list = new LinkedList()

list.insertNode(30)
list.insertNode(20)
list.insertNode(10)

list.print()


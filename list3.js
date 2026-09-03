//insert node after tail node

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  //insert node after tail
  InsertNodeAfterTell(data) {
    const newNode = new Node(data)

    if (this.head === null) {
      this.head = newNode
      this.tail = newNode
      return
    }

    this.tail.next = newNode
    this.tail = newNode

  }

  //inset node at n position
  InsertNodeAtNPosition(data, position) {
    const newNode = new Node(data)

    //if position is 1 then it became head
    if (position === 1) {
      newNode.next = this.head
      this.head = newNode

      //if empty list
      if (this.tail === null) {
        this.tail = newNode
      }

      return
    }

    let current = this.head

    for (let i = 1; i < position - 1; i++) {
      if (current === null) {
        return
      }

      current = current.next
    }

    newNode.next = current.next
    current.next = newNode

    // If inserted at the end, update tail
    if (newNode.next === null) {
      this.tail = newNode;
    }
  }

  DeleteNodeAtNPosition(position) {
    let current = this.head
    if (position === 1) {
      this.head = current.next
      return
    }

    for (let i = 1; i < position - 1; i++) {
      current = current.next
    }

    if (current.next === this.tail) {
      this.tail = current
      current.next = null
      return
    }

    current.next = current.next.next

  }

  //print node
  print() {
    let current = this.head
    while (current !== null) {
      console.log(current.data);
      current = current.next
    }
  }
}

const list = new LinkedList()

list.InsertNodeAfterTell(10)
list.InsertNodeAfterTell(20)
list.InsertNodeAfterTell(30)
list.InsertNodeAfterTell(40)
list.InsertNodeAfterTell(50)

// list.InsertNodeAtNPosition(35, 4)
list.DeleteNodeAtNPosition(5)

list.print()
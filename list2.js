//insert node after tell node

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tell = null
  }

  //insert node after tell
  InsertNodeAfterTell(data) {
    const newNode = new Node(data)

    if (this.head === null) {
      this.head = newNode
      this.tell = newNode
      return
    }

    this.tell.next = newNode

    this.tell = newNode

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

list.print()
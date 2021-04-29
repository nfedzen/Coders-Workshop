

class Node {
  constructor(data){
    this.data = data
    this.next = null
  }

  getData() {
    return this.data
  }

  setNextNode(node){
    this.next = node
  }

  getNextNodeData(){
    return this.next.data
  }
}

class linkedList {
  constructor(head = null){
    this.head = head
  }

  printList(){
    let print = this.head
    while(print !== null){
      console.log(print.data)
      print = print.next
    }
  }

  arrange(){
    let beginning = this.head
    let current = null
    let next = beginning.next
    let swap = 0
    if(beginning.data > next.data){
      swap = beginning.data
      beginning.data = next.data
      next.data = swap
      current = next
      next = current.next
    } else {
      current = next
      next = current.next
    }
    while(next !== null){
      if(current.data > next.data){
        swap = current.data
        current.data = next.data
        next.data = swap
        current = next
        next = current.next
      } else {
        current = next
        next = current.next
      }
    }

  }
}

let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)
let node5 = new Node(5)


node1.setNextNode(node2)
node2.setNextNode(node3)
node3.setNextNode(node4)
node4.setNextNode(node5)
let linkedList1 = new linkedList(node1)
linkedList1.arrange()
linkedList1.printList()


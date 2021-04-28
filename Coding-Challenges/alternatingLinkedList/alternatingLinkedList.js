

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

  arrange(){
    let start = this.head

  }
}

let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)
let node5 = new Node(5)


node1.setNextNode(node2)
node2.setNextNode(node3)
node3.setNextNode(node2)
node1.setNextNode(node2)

console.log(node1.getNextNodeData())
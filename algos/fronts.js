class SLLNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SLL {
    constructor(val) {
        this.head = null
    }
    addFront(value) {
        var newNode = new SLLNode(value)
        newNode.next = this.head;
        this.head = newNode
        return this.head
    }
    removeFront() {
        if(this.head == null){
            return this.head
        }
        var removedNode = this.head;
        this.head = removedNode.next;
        removedNode.next = null;
        return this.head
    }
    front() {
        return this.head ? this.head.value : null
    }
}
// Examples:

// Add Front
// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.

SLL1 = new SLL()
console.log(SLL1.addFront(18)) // Node { data: 18, next: null }
console.log(SLL1.addFront(5)) // Node { data: 5, next: Node { data: 18, next: null } }
console.log(SLL1.addFront(73)) // Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } } }

// Remove Front
// Write a method to remove the head node and return the new list head node. If the list is empty, return null.

console.log(SLL1.removeFront()) // Node { data: 5, next: Node { data: 18, next: null } }
console.log(SLL1.removeFront()) // Node { data: 18, next: null }

// Front
// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.

console.log(SLL1.front()) // 18
console.log(SLL1.removeFront()) // null
console.log(SLL1.front()) // null
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
    display() {
        var listValues = ""
        if(this.head == null) {
            return listValues
        }
        listValues += this.head.value;
        var runner = this.head.next;
        while (runner != null) {
            listValues += ", " + runner.value;
            runner = runner.next
        }
        return listValues
    }
}

// Create display() that uses a while loop and a runner to return a string containing all list values. Build what you wish console.log(myList) did!

SLL1 = new SLL()
console.log(SLL1.addFront(76)) // Node { data: 76, next: null }
console.log(SLL1.addFront(2)) // Node { data: 2, next: Node { data: 76, next: null } }
console.log(SLL1.display()) // "2, 76"
console.log(SLL1.addFront(11.41)) // Node { data: 11.41, next: Node { data: 2, next: Node { data: 76, next: null } } }
console.log(SLL1.display()) // "11.41, 2, 76"
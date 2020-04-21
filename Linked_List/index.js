// Node Class
class Node {
    // node class constructor
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

// LinkedList class
class LinkedList {
    // linkedlist constructor
    constructor(){
        this.head = null; // the head points to null;
        this.size = 0; // size is 0
    }
}

// sanity check 
n1 = new Node(100); // creates a new node
console.log(n1); // prints the new created node
list = new LinkedList(); //creates a new linked list
console.log(list); // prints new created linked list
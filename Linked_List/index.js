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

    // method to add a new node as the first node in the linked list, it takes some data
    insertFirst(data){
        // its head is a new node so it takes data and it takes a pointer
        this.head = new Node(data, this.head);
        // as we create a node we increase the size of the linked list
        this.size++;

    }
}

// sanity check 
n1 = new Node(100); // creates a new node
console.log(n1); // prints the new created node
list = new LinkedList(); //creates a new linked list
console.log(list.data); // prints the data

// add a new node to LinkedList 
list.insertFirst(400);
console.log(list.data); // print the data in linked list
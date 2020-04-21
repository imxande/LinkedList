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

    printListData(){
        // create a variable that holds head
        let current = this.head;

        // loop through to get data
        while(current){
            // print the data
            console.log(current.data);
            // do this until there are no more data in the linked list
            current = current.next // if multiple data get every single piece from all the nodes in the linked list
        }
    }

}

// sanity check 
n1 = new Node(100); // creates a new node
console.log(n1); // prints the new created node
list = new LinkedList(); //creates a new linked list
console.log(list); // prints the data

// add a new node to LinkedList 
list.insertFirst(400); // add 400 to our linked list head
list.insertFirst(100);// add 100 to our linked list head 
console.log(list); // print the data in linked list

// since we might have multiple node data in the list lets print them
list.printListData();

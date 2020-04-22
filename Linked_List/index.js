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

    // method to add data to the end of the linked list
    insertLast(data){
        // create a new node pass the data
        const node = new Node(data);
        // create a place holder for the nodes in the linked list as we loop through
        let current;

        // check if list is empty
        if(!this.head){
            this.head = node;
        }
        // if linked list is populater then do the following
        else {
            // assign the variable current to the be the head of the linked list
            current = this.head;

            // loop until you get to the last node of the linked list
            while(current.next){
                // since we are looping then we want to assigned our current to be the last node
                current = current.next;
            }
            // add the new created node to the last node/item of the linked list
            current.next = node; 
        }
        // Increase the count
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
list.insertFirst(400);  // add 400 to our linked list head
list.insertFirst(100); // add 100 to our linked list head
list.insertLast(500); // add 500 to the tail of our linked list   
console.log(list); // print the linked list

// since we might have multiple node data in the list lets print them
list.printListData();

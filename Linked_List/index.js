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

    // method to insert a node into specific index in the linked list, it takes data and the index
    insertAt(data, index){
        // check if index is out of range
        if(index > 0 && index > this.size){
            // return false
            return;
        }
        // create a new node
        const node = new Node(data);
        // we need two variables to hold the current and previous node
        let current; 
        let previous;

        // assign head to current variable
        current = this.head;

        // check if index is 0 
        if(index === 0){
            // if so then the existing head should be next to the node
            node.next = this.head;
            // if so then add created node as the head of the linked list
            this.head = node;
        }
        else {
            // set current to head
            current = this.head;
            // create a variable to count
            let count = 0;

            // iterate to the right position
            while(count < index){
                // increase the count
                count++;
                previous = current;
                current = current.next;
            }
            // when you find right position add the new node there between previous and current
            node.next = current;
            previous.next = node;
        }
        // increase the linked list size
        this.size++;
    }

    // method to get specific node in our linked list
    getAt(index){
        let current = this.head;
        let count = 0;

        // iterate through the linked list
        while(current){
            // check if count is equal to the index
            if(count === index){
                // print the value
                console.log(current.data);
            }
            // increase count
            count++;
            // increment the loop
            current = current.next;
        }
        return null;
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
list.insertAt(200, 10); // sanity check, add 200 to a none existing index(nothing happens since index is out of range)
list.insertAt(50, 0); // add 50 to the 0 index 
list.insertAt(200, 2); // add 200 to the 2 index of the linked list
list.getAt(2); // prints data at index 0 in the linked list      
console.log(list); // print the linked list


// since we might have multiple node data in the list lets print them
list.printListData();

class Stack {
    constructor() {
        // Initialize the Stack class here
        this.stack = [];
    }

    push(value) {
        // Implement the push method
        // this.stack.unshift(value); // returns the new lenght of the stack (non-semantic approach)
        this.stack.splice(0, 0, value); // more semantically approach
    }

    pop() { //Done
        // Implement the pop method
        if (this.isEmpty()) {
            return -1;
        }
        return this.stack.slice(0, 1)[0];
    }

    peek() { //Done
        // Implement the peek method
        if (this.isEmpty()) {
            return -1;
        }
        return this.stack[0];
    }

    isEmpty() { //Done
        // Implement the isEmpty method
        return this.stack.length === 0;
    }
}

const stack = new Stack();
stack.push(5);
stack.push(10);
//[10, 5]
console.log("Top element:", stack.peek()); // Should print 10
console.log("Removing top element:", stack.pop()); // Should print 10
console.log("Is stack empty?", stack.isEmpty()); // Should print false\


// Instructions:

// Create a class called Stack that represents a simple stack data structure.
// Implement the following methods in the Stack class:
// push(value): Add an integer to the top of the stack.
// pop(): Remove the top element from the stack and return its value. If the stack is empty, return -1.
// peek(): Return the top element of the stack without removing it. If the stack is empty, return -1.
// isEmpty(): Return a boolean value indicating whether the stack is empty or not.
// Please make sure to handle edge cases, such as empty stack situations, properly.
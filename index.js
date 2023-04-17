class Stack {
    constructor() {
        // Initialize the Stack class here
        this.stack = [];
    }

    push(value) {
        // Implement the push method
        this.stack.push(value);
    }

    pop() {
        // Implement the pop method
        if (this.isEmpty()) {
            return -1;
        }
        return this.stack.pop();
    }

    peek() {
        // Implement the peek method
        if (this.isEmpty()) {
            return -1;
        }
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        // Implement the isEmpty method
        return this.stack.length === 0;
    }
}

const stack = new Stack();
stack.push(5);
stack.push(10);
console.log("Top element:", stack.peek()); // Should print 10
console.log("Removing top element:", stack.pop()); // Should print 10
console.log("Is stack empty?", stack.isEmpty()); // Should print false
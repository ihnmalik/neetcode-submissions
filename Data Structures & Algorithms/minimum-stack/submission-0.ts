class MinStack {
    private stack: number[] = [];
    private minStack: number[] = [];

    constructor() {}

    push(val: number): void {
        this.stack.push(val);

        // Store duplicates as well
        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }
    }

    pop(): void {
        const removed = this.stack.pop();

        if (removed === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}

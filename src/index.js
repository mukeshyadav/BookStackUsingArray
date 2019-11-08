class BookStack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    return this.stack.push(item);
  }

  pop() {
    return this.stack.pop();
  }

  get length() {
    return this.stack.length;
  }

  peek() {
    return this.stack[this.length - 1];
  }

  isEmpty() {
    return this.length === 0;
  }
}

const book = new BookStack();

console.log(book.push(1));
console.log(book.push(2));
console.log(book.peek());

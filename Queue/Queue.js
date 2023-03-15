class Queue {
  #list = [];
  #capacity = null;
  #tail = 0;
  #head = 0;
  constructor(capacity) {
    this.#capacity = Math.max(Number(capacity), 0) || null;

    if (this.#capacity) {
      this.#list = Array.from({ length: this.#capacity });
    }
  }

  get size() {
    return this.#tail - this.#head;
  }
  get isEmpty() {
    return this.size === 0;
  }
  get isFull() {
    return this.#capacity && this.#tail === this.#capacity;
  }

  clear() {
    if(this.#capacity) {
      this.#list = Array.from({length: this.#capacity});
    } else {
      this.#list = [];
    }
    
    this.#head = 0;
    this.#tail = 0;
  }

  enqueue(item) {
    if (!this.isFull) {
      this.#list[this.#tail] = item;
      this.#tail += 1;
    }
    return this.size;
  }

  dequeue() {
    let item = null;
    if(!this.isEmpty) {
      item = this.#list[this.#head];
      delete this.#list[this.#head];
      this.#head += 1;
      if(this.isEmpty) {
        this.#head = 0;
        this.#tail = 0;
      }
    }
    return item;
  }

  peek() {
    if(this.isEmpty) {
      return null;
    }
    return this.#list[this.#head];
  }

  toString() {
    if(this.isEmpty) {
      return '';
    }
    
    let str = `${this.#list[this.#head]}`;
    
    for(let i = this.#head+1; i < this.#tail; i++) {
      str += `, ${this.#list[i]}`;
    }
    
    return str;
  }
}


let queue = new Queue()
queue.enqueue(10)
queue.enqueue(3)
queue.enqueue(8)
console.log(queue.toString())
queue.dequeue()
queue.enqueue(7)
console.log(queue.toString())


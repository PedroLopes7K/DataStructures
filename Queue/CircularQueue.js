class CircularQueue {
  #list;
  #capacity;
  #tail = -1;
  #head = -1;
  #size = 0;

  constructor(capacity) {
    //   this.#capacity = Math.max(Number(capacity), 0) || 10;
    this.#capacity = Math.max(Number(capacity), 0);
    this.#list = Array.from({ length: this.#capacity });
  }

  get capacity() {
    return this.#capacity;
  }
  get size() {
    return this.#size;
  }

  get isFull() {
    return this.size === this.#capacity;
  }

  get isEmpty() {
    return this.size === 0;
  }

  enqueue(item) {
    // console.log(item);
    if (!this.isFull) {
        // https://pt.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/what-is-modular-arithmetic
      this.#tail = (this.#tail + 1) % this.#capacity;
      console.log(this.#tail)

      //   console.log(this.#tail);
      this.#list[this.#tail] = item;
      this.#size += 1;

      if (this.#head === -1) {
        this.#head = this.#tail;
      }
    }

    return this.size;
  }

  dequeue() {
    let item = null;
    // console.log(this.#size)
    if (!this.isEmpty) {
      item = this.#list[this.#head];
      delete this.#list[this.#head];
      this.#head = (this.#head + 1) % this.#capacity;
      this.#size -= 1;

      if (!this.size) {
        this.#head = -1;
        this.#tail = -1;
      }
    }
    return item;
  }

  peek() {
    return this.#list[this.#head];
  }

  toString() {
    return this.#list.filter((el) => el !== undefined).toString();
  }
}

let cq = new CircularQueue(5);

cq.enqueue(1);
cq.enqueue(2);
cq.enqueue(3);
cq.enqueue(4);
cq.enqueue(5);
console.log(cq.toString());
cq.dequeue()
cq.enqueue(6);
console.log(cq.toString());


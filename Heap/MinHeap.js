class Node {
    constructor(val) {
      this.val = val;
    }
  }
  
  class MinHeap {
    constructor() {
      this.values = [];
      this.name = 'Min Heap';
    }
    enqueue(element) {
      this.values.push(element);
      this.bubbleUp();
    }
    bubbleUp() {
      let idx = this.values.length - 1;
      const element = this.values[idx];
      console.log(`verificando - ${element}`);
      while (idx > 0) {
        console.log(`Index do elemento - ${idx}`);
        let parentIdx = Math.floor((idx - 1) / 2);
        let parent = this.values[parentIdx];
        console.log(`o pai é - ${parent}, no index - ${parentIdx}`);
  
        if (element >= parent) break;
        console.log(` ${element} é menor que o pai (${parent}), troca`);
  
        this.values[parentIdx] = element;
        this.values[idx] = parent;
        idx = parentIdx;
      }
      console.log('=========================')
    }
    // Removendo o valor do topo (menor prioridade)
    dequeue() {
      const max = this.values[0];
      const end = this.values.pop();
      if (this.values.length > 0) {
        this.values[0] = end;
        this.sinkDown();
      }
      return max;
    }
    sinkDown() {
      let idx = 0;
      const length = this.values.length;
      const element = this.values[0];
      console.log(`elemento do topo ${element}`)
      while (true) {
        let leftChildIdx = 2 * idx + 1;
        let rightChildIdx = 2 * idx + 2;
        let leftChild, rightChild;
        let swap = null;                                  
                                               // 4 , 3, 2, 5, 6, 
        if (leftChildIdx < length) {
          leftChild = this.values[leftChildIdx];
          if (leftChild < element) {
            swap = leftChildIdx;
          }
        }
        if (rightChildIdx < length) {
          rightChild = this.values[rightChildIdx];
          if (
            (swap === null && rightChild < element) ||
            (swap !== null && rightChild < leftChild)
          ) {
            swap = rightChildIdx;
          }
        }
  
        if (swap === null) break;
        console.log(`index swap - ${swap} - valor ${this.values[swap]}`)
        this.values[idx] = this.values[swap];
        this.values[swap] = element;
        idx = swap;
      }
    }
  }

  let MH = new MinHeap();
MH.enqueue(5);
MH.enqueue(4)
MH.enqueue(2)
MH.enqueue(3)
MH.enqueue(6)
MH.enqueue(1)
console.log(MH)
MH.dequeue()
console.log(MH)

  

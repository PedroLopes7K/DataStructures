class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            previous: null
        };
        this.length = 1;
        this.tail = this.head;
    }

    printList() {
        let array = [];
        let currentList = this.head;
        while (currentList !== null) {
            array.push(currentList.value);
            currentList = currentList.next;
        }

        console.log(array.join(' <--> '));
        return this;
    }

    // Insere um nó no fim da lista
    append(value) {
        let newNode = new Node(value);

        this.tail.next = newNode;
        newNode.previous = this.tail;
        this.tail = newNode;

        this.length++;
        this.printList();
    }

    // Insere um nó no começo da lista
    prepend(value) {
        let newNode = new Node(value);

        newNode.next = this.head;
        this.head.previous = newNode;
        this.head = newNode;

        this.length++;
        this.printList();
    }

    // Insere um nó em um index passado
    insert (index, value) {
        if (!Number.isInteger(index) || index < 0 || index > this.length + 1) {
            console.log(`Index inválido. O tamanho atual é: ${this.length}.`);
            return this;
        }

        // Se o index é 0, prepend
        if (index === 0) {
            this.prepend(value);
            return this;
        }

        // Se o index é igual a this.length, append
        if (index === this.length) {
            this.append(value);
            return this;
        }

        // Alcance o nó nesse índice
        let newNode = new Node(value);
        let previousNode = this.head;

        for (let k = 0; k < index - 1; k++) {
            previousNode = previousNode.next;
        }

        let nextNode = previousNode.next;
        
        newNode.next = nextNode;
        previousNode.next = newNode;
        newNode.previous = previousNode;
        nextNode.previous = newNode;

        this.length++;
        this.printList();
    }

    // Remove um nó
    remove (index) {
        if (!Number.isInteger(index) || index < 0 || index > this.length) {
            console.log(`Index inválido. O tamanho atual é: ${this.length}.`);
            return this;
        }

        // Remove o primeiro (head)
        if (index === 0) {
            this.head = this.head.next;
            this.head.previous = null;

            this.length--;
            this.printList();
            return this;
        }

        // Remove o ultimo (tail)
        if (index === this.length - 1) {
            this.tail = this.tail.previous;
            this.tail.next = null;

            this.length--;
            this.printList();
            return this;
        }

        // Remove nó em um index
        let previousNode = this.head;

        for (let k = 0; k < index - 1; k++) {
            previousNode = previousNode.next;
        }
        let deleteNode = previousNode.next;
        let nextNode = deleteNode.next;

        previousNode.next = nextNode;
        nextNode.previous = previousNode;

        this.length--;
        this.printList();
        return this;
    }
}

let myDoublyList = new DoublyLinkedList(10);

myDoublyList.append(5);                     // 10 <--> 5

myDoublyList.append(16);                    // 10 <--> 5 <--> 16

myDoublyList.prepend(1);                    // 1 <--> 10 <--> 5 <--> 16

myDoublyList.insert(2, 99);                 // 1 <--> 10 <--> 99 <--> 5 <--> 16
myDoublyList.insert(20, 88);                // Invalid index. Current length is 5.
myDoublyList.insert(5, 80);                 // 1 <--> 10 <--> 99 <--> 5 <--> 16 <--> 80
myDoublyList.insert(0, 80);                 // 80 <--> 1 <--> 10 <--> 99 <--> 5 <--> 16 <--> 80

myDoublyList.remove(0);                     // 1 <--> 10 <--> 99 <--> 5 <--> 16 <--> 80
myDoublyList.remove(5);                     // 1 <--> 10 <--> 99 <--> 5 <--> 16
myDoublyList.remove(2);                     // 1 <--> 10 <--> 5 <--> 16
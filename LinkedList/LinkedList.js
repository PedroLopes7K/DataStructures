class Node {
    constructor(element)
    {
        this.element = element;
        this.next = null
    }
}

class LinkedList {
    constructor()
    {
        this.head = null;
        this.size = 0;
    }
 
    add(element)
{
    // criando um novo nó
    let node = new Node(element);
 
    // para armazenar o ultimo nó da lista
    let current;
 
   // se a lista estiver vazia, o nó inserido vira o head
    if (this.head == null)
        this.head = node;
    else {
        current = this.head;
 
        // itera sobre a lista
        while (current.next) {
            current = current.next;
        }
 
        // adiciona o nó
        current.next = node;
    }
    this.size++;
}
insertAt(element, index)
{
    if (index < 0 || index > this.size)
        return console.log("Index Inválido.");
    else {
        // cria um novo nó
        let node = new Node(element);
        let curr, prev;
 
        curr = this.head;
 
        // adiciona o elemento no primeiro index
        if (index == 0) {
            node.next = this.head;
            this.head = node;
        } else {
            curr = this.head;
            let it = 0;
 
            // itera sobre a lista para encontrar a posição
            while (it < index) {
                it++;
                prev = curr;
                curr = curr.next;
            }
 
            // adiciona o elemento
            node.next = curr;
            prev.next = node;
        }
        this.size++;
    }
}

removeFrom(index)
{
    if (index < 0 || index >= this.size)
        return console.log("Index Inválido.");
    else {
        let curr, prev, it = 0;
        curr = this.head;
        prev = curr;
 
        // deleta o primeiro elemento
        if (index === 0) {
            this.head = curr.next;
        } else {
              // itera sobre a lista para encontrar a posição
            while (it < index) {
                it++;
                prev = curr;
                curr = curr.next;
            }
 
            // remove o elemento
            prev.next = curr.next;
        }
        this.size--;
 
        // retorna o elemento removido
        return curr.element;
    }
}
removeElement(element)
{
    let current = this.head;
    let prev = null;
 
    // itera sobre a lista
    while (current != null) {
        // compara o elemento com o atual
        // se for encontrado, remove e retorna true
        if (current.element === element) {
            if (prev == null) {
                this.head = current.next;
            } else {
                prev.next = current.next;
            }
            this.size--;
            return current.element;
        }
        prev = current;
        current = current.next;
    }
    return -1;
}
 
indexOf(element)
{
    var count = 0;
    var current = this.head;
 
    // itera sobre a lisra
    while (current != null) {
        // compara cada elemento e se encontrar devolve o index
        if (current.element === element)
            return count;
        count++;
        current = current.next;
    }
 
    // não encontrado
    return -1;
}
isEmpty()
{
    return this.size == 0;
}

size_of_list()
{
   return  this.size;
}
printList()
{
    let curr = this.head;
    let str = "";
    while (curr) {
        str += curr.element + " ";
        curr = curr.next;
    }
     console.log(str);
}
}

let ll = new LinkedList();
 

console.log(ll.isEmpty());
 
ll.add(10);
 
ll.printList();
 
console.log(ll.size_of_list());
 
ll.add(20);
console.log(ll);
ll.add(30);
ll.add(40);
ll.add(50);

// 10 20 30 40 50
ll.printList();
 
//  50 
console.log("o elemento foi removido ?" + ll.removeElement(50));
 
//  10 20 30 40
ll.printList();
 
//  3
console.log("Index  40 " + ll.indexOf(40));
 
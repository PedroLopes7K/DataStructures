class QElement {
    constructor(element, priority)
    {
        this.element = element;
        this.priority = priority;
    }
}
  
class PriorityQueue {
  
    constructor()
    {
        this.items = [];
    }
  
    enqueue(element, priority)
{
    var qElement = new QElement(element, priority);
    var contain = false;
  
   // itera sobre o array para achar a posição correta
    for (var i = 0; i < this.items.length; i++) {
    // NESSE MODELO 1 É A MAIOR PRIORIDADE
        if (this.items[i].priority > qElement.priority) {
        // quando acha a posição ele é inserido na posião i
            this.items.splice(i, 0, qElement);
            // splice pode ser usado para adicionar elementos em uma certa posição
            // sem remover nenhum
            contain = true;
            break;
        }
    }
  
  // se ele tem a maior prioridade ele é adicionado no fim da fila
    if (!contain) {
        this.items.push(qElement);
    }
}
    
dequeue()
{

    if (this.isEmpty())
        return "Vazia";
    return this.items.shift();
}
   
front()
{
   
    if (this.isEmpty())
        return "No elements in Queue";
    return this.items[0];
}

rear()
{
    if (this.isEmpty())
        return "No elements in Queue";
    return this.items[this.items.length - 1];
}

isEmpty()
{
    // return true if the queue is empty.
    return this.items.length == 0;
}

printPQueue()
{
    var str = "";
    for (var i = 0; i < this.items.length; i++)
        str += this.items[i].element + " ";
    return str;
}
}

var priorityQueue = new PriorityQueue();
  

  

  
priorityQueue.enqueue("Sumit", 2);
priorityQueue.enqueue("Gourav", 1);
priorityQueue.enqueue("Piyush", 1);
priorityQueue.enqueue("Sheru", 3);
  
console.log(priorityQueue.printPQueue());
  
  
console.log(priorityQueue.rear().element);

console.log(priorityQueue.dequeue().element);
  
console.log(priorityQueue.printPQueue());


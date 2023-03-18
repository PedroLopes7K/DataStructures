//Node
class Node{
    constructor(elm, next = null, prev=null){
      this.element = elm;
      this.next = next;
      this.prev = prev;
    }
  }
  
  class circularLinkedList{
      constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
      }
      
      //Pega um elemento em um index especifico
      getElementAt = function(index) {
        if(index >= 0 && index <= this.length){
          let node = this.head;
          for(let i = 0; i < index && node != null; i++){
            node = node.next;
          }
          return node;
        }
        return undefined;
      }
  
      //Adiciona no fim 
      append = function(element) {
        let node = new Node(element),
            current = this.head,
            previous;
  
        if(!this.head){
          this.head = node;
          this.tail = node;
        }else{
          node.prev = this.tail;
          this.tail.next = node;
          this.tail = node;
        }
        
        this.head.prev = this.tail;
  
        this.tail.next = this.head;
    
        this.length++;
      }
  
  
    //Adiciona um elemento em uma certa posição
    insert = function(position, element) {
  
      //verifica se o index é valido
      if(position >= 0 && position <= this.length){
        let node = new Node(element),
            current = this.head,
            previous,
            index = 0;
  
            // adiciona na primeira posição (head)
        if(position === 0){
          if(!this.head){
            this.head = node;
            this.tail = node;
          }else{
            node.next = current;
            current.prev = node;
            this.head = node;
          }
        }
         // adiciona na ultima posição (tail)
        else if(position === this.length){
          current = this.tail;
          current.next = node;
          node.prev = current;
          this.tail = node;
        }
        // adiciona em uma psição no meio
        else{
          while(index++ < position){
            previous = current;
            current = current.next;
          }
  
          node.next = current;
          previous.next = node;
  
        
          current.prev = node;
          node.prev = previous; 
        }
        
        this.head.prev = this.tail;
  
        this.tail.next = this.head;
  
        this.length++;
        return true;
      }else{
        return false;
      }
    }
  
    //Remove um elemento em uma posição
    removeAt = function(position){
      //verifica se a posição é valida
      if(position > -1 && position < this.length){
        let current = this.head, previous, index = 0;
  
        //Remove o primeiro elemento
        if(position === 0){
          this.head = current.next;
  
          //se existe apenas um item
          if(this.length === 1){
            this.tail = null;
          }else{
            this.head.prev = null;
          }
        }
        // remove o ultimo elemento
        else if(position === this.length - 1){
          current = this.tail;
          this.tail = current.prev;
          this.tail.next = null;
        }
        // remove um elemento no meio da lista
        else{
          while(index++ < position){
            previous = current;
            current = current.next;
          }
  
          previous.next = current.next; 
          current.next.prev = previous;
        }
        
        // se a lista não ficou vazia
        if(this.head){
          this.head.prev = this.tail;
          this.tail.next = this.head;
        }
  
        this.length--;
        return current.element;
      }else{
        return null;
      }
    }
  
    //Pega o index de um item
    indexOf = function(elm){
      let current = this.head,
          index = 0; // começa no index 0
  
      //If element found then return its position
      while(current){
        if(elm === current.element){
          return index;
        }
  
        index++;
        current = current.next;
      }
  
      return -1; // retorna -1 se não existir
    };
  
    //Encontra um item na lista
    isPresent = (elm) => {
      return this.indexOf(elm) !== -1;
    };
  
    //Deleta um elemento da lista
    delete = (elm) => {
      return this.removeAt(this.indexOf(elm));
    };  
  
   
    //Deleta o primeiro elemento da lista
    deleteHead = function(){
      this.removeAt(0);
    }
  
    //Deleta o ultimo elemento da lista
    deleteTail = function(){
      this.removeAt(this.length-1);
    }
  
    //Imprime a lista como string
    toString = function(){
      let current = this.head,
      string = '';
  
      const temp = this.head.element;
      
      while(current){
        // condição de parada, quando o proximo elemente é o head
        if(temp === current.next.element){
          string += current.element + (current.next ? '\n' : '');
          break;
        }
        
        string += current.element + (current.next ? '\n' : '');
        current = current.next;
      }
  
      return string;
    };
  
    //Converte a lista para array
    toArray = function(){
      let arr = [],
      current = this.head;
  
      const temp = this.head.element
  
      while(current){
        // condição de parada, quando o proximo elemente é o head
        if(temp === current.next.element){
          arr.push(current.element);
          break;
        }
        
        arr.push(current.element);
        current = current.next;
      }
  
      return arr;
    };
  
    //Verifica se a lista está vazia
    isEmpty = function(){
      return this.length === 0;
    };
  
    //Pega o tamanho da lista
    size = function(){
      return this.length;
    }
  
    //Pega o primeiro elemento
    getHead = function() {
      return this.head;
    }
  
    //Pega o ultimo elemento
    getTail = function() {
      return this.tail;
    }
  }

let cLL = new circularLinkedList();
cLL.append(10);
cLL.append(20);
cLL.append(30);
cLL.insert(3, 50);
console.log(cLL.toArray());
console.log(cLL.indexOf(50));
cLL.removeAt(0);
console.log(cLL.toArray());
console.log(cLL.indexOf(50));
// console.log(cLL.size());
cLL.insert(2, 99);
console.log(cLL.toArray());
console.log(cLL.getElementAt(2));


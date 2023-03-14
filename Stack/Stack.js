// Stack class
class Stack {
 
    // Usando um array para implementar a stack
    constructor()
    {
        this.items = [];
    }
 
    
    push(element)
{
    // inserindo elementos em items
    this.items.push(element);
}

    pop()
{
    // retorna o elemento mais alto da pilha
    // e remove ele da pilha
    // retorna falso se a pilha estiver vazia
    if (this.items.length == 0)
        return false;
    return this.items.pop();
}

    peek()
{
    // retorna o elemento mais alto da pilha
    // mas não remove ele da pilha
    return this.items[this.items.length - 1];
}

    isEmpty()
{
    // retorna verdadeiro se a pilha estiver vazia
    return this.items.length == 0;
}

    printStack()
{
    // imprimindo a pilha
    var str = "";
    for (var i = 0; i < this.items.length; i++)
        str += this.items[i] + " ";
    return str;
}
}


let stack = new Stack();
 
stack.push(10);
stack.push(20);
stack.push(30);
 
console.log(stack.printStack());
 
console.log(stack.peek());
 
console.log(stack.pop());
 
console.log(stack.printStack());
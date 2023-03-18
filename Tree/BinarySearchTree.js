class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    // criando um nó
    let newNode = new Node(data);

    // se a raiz for nula o nó vira a raiz
    if (this.root === null) this.root = newNode;
    // encontra a posição correta na árvore para o nó
    else this.insertNode(this.root, newNode);
  }

  // percorre a árvore ate encontrar o local para inserção
  insertNode(node, newNode) {
    // se o novo nó for menor, movemos para a esquerda da árvore
    if (newNode.data < node.data) {
      // se o nó a esquerda estiver vazio, insere aqui
      if (node.left === null) node.left = newNode;
      // se o nó a esquerda estiver ocupado
      // chama a função recursivamente ate encontrar uma posição
      else this.insertNode(node.left, newNode);
    }

    // se o novo nó for maior, movemos para a esquerda da árvore
    else {
      // se o nó a direita estiver vazio, insere aqui
      if (node.right === null) node.right = newNode;
      // se o nó a direita estiver ocupado
      // chama a função recursivamente ate encontrar uma posição
      else this.insertNode(node.right, newNode);
    }
  }
  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, key) {
    // se a raiz for null, não existem elementos
    if (node === null) return null;
    // se o dado é menor que a raiz, move para a esquerda
    else if (key < node.data) {
      console.log(`${key} é menor que ${node.data}`);
      console.log(`a esquerda de ${node.data} é ${node.left?.data} no momento`);
      node.left = this.removeNode(node.left, key);
      console.log(
        `a esquerda de ${node.data} foi atualizada para ${node.left?.data}`
      );

      return node;
    }
    // se o dado é maior que a raiz, move para a direita
    else if (key > node.data) {
      console.log(`${key} é maior que ${node.data}`);
      console.log(`a direita de ${node.data} é ${node.right?.data} no momento`);
      node.right = this.removeNode(node.right, key);
      console.log(
        `a diretita de ${node.data} foi atualizada para ${node.right?.data}`
      );
      return node;
    }
    // nó a ser deletado encontrado
    else {
      // deletando um nó sem filhos
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      // deletando nó com 1 filho
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      // Deletando nó com dois filhos
      // o menor nó da sub árvore a direita é armazenado em aux
      var aux = this.findMinNode(node.right);
      console.log(`aux é ${aux.data}`);
      node.data = aux.data;
      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }

  findMinNode(node) {
    // se a esquerda desse nó for null, então ele é o menor nó
    if (node.left === null) return node;
    else return this.findMinNode(node.left);
  }

  getRootNode() {
    return this.root;
  }

  search(node, data) {
    // se a árvore estiver vazia, retorna null
    if (node === null) return null;
    // se data é menor que o nó, move para a esquerda
    else if (data < node.data) return this.search(node.left, data);
    // se data é maior que o nó, move para a direita
    else if (data > node.data) return this.search(node.right, data);
    //se data é igual ao nó, então encontramos, retorna o nó
    else return node;
  }
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }

  preorder(node) {
    if (node !== null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  postorder(node) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }
}

let BST = new BinarySearchTree();

BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17

let root = BST.getRootNode();

//  5 7 9 10 13 15 17 22 25 27
BST.inorder(root);

// Remocendo nó com dois filhos
BST.remove(25);
console.log('====================')


// //          15
// //         /  \
// //        10   27
// //       / \   /
// //      7  13 22
// //     /  \    /
// //     5   9  17

BST.remove(15);
console.log('====================')

// //          17
// //         /  \
// //        10   27
// //       / \   /
// //      7  13 22
// //     /  \
// //     5   9

BST.remove(5);
console.log('====================')

BST.remove(9);
console.log('====================')


// //          17
// //         /  \
// //        10   27
// //       / \   /
// //      7  13 22

// 7 10 13 17 22 27
BST.inorder(root);

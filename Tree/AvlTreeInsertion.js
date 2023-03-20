class Node {
  constructor(d) {
    this.key = d;
    this.height = 1;
    this.left = null;
    this.right = null;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

 // AJUDA A PEGAR A ALTURA DA ÁRVORE
  height(N) {
    if (N == null) return 0;

    return N.height;
  }

  // PEGA O MAIOR NÚMERO ENTRO 2 N´MEROS
  max(a, b) {
    return a > b ? a : b;
  }

  // ROTAÇÃO PARA A DIREITA
  rightRotate(y) {
    console.log(`Rotacionando ${y.key} para a direita`);
    var x = y.left;
    var T2 = x.right;

    // realiza a rotação
    x.right = y;
    y.left = T2;

    // atualiza as alturas
    y.height = this.max(this.height(y.left), this.height(y.right)) + 1;
    x.height = this.max(this.height(x.left), this.height(x.right)) + 1;
    console.log(`${y.key} virou filho a direita de ${x.key}. 
    se ${x.key} tinha algum filho a direita. esse filho virou filho a esquerda de ${y.key} `);
    console.log(`alturas - ${x.key} - ${x.height}.  ${y.key} - ${y.height}. `);

    // Retorna  a nova raiz (root)
    return x;
  }

  // ROTAÇÃO PARA A ESQUERDA
  leftRotate(x) {
    console.log(`Rotacionando ${x.key} para a esquerda`);

    var y = x.right;
    var T2 = y.left;

    // realiza a rotação

    y.left = x;
    x.right = T2;

    // atualiza as alturas
    x.height = this.max(this.height(x.left), this.height(x.right)) + 1;
    y.height = this.max(this.height(y.left), this.height(y.right)) + 1;
    console.log(`${x.key} virou filho a esquerda de ${y.key}. 
    se ${y.key} tinha algum filho a esquerda. esse filho virou filho a direita de ${x.key} `);
    console.log(`alturas - ${x.key} - ${x.height}.  ${y.key} - ${y.height}. `);

    // Retorna a nova raiz (root)
    return y;
  }

  // Get Balance factor of node N
  getBalance(N) {
    if (N == null) return 0;

    //                10
    //                 \
    //         EX:      20 h = 1
    //    n.left = 0         n.right = 1
    //
    return this.height(N.left) - this.height(N.right);
  }

  insert(node, key) {
    /* 1. INSERÇÃO PADRÃO DA BST */
    if (node == null) return new Node(key);

    if (key < node.key) node.left = this.insert(node.left, key);
    else if (key > node.key) node.right = this.insert(node.right, key);
    // key já existe
    else return node;

    /* 2. Atualizar a altura deste nó ancestral */
    // sempre que um nó é inserido, atualizamos a altura dos ancestrais
    node.height = 1 + this.max(this.height(node.left), this.height(node.right));

    /* 3. pega o fator de balanceamento desse nó para verificar se ele está desbalanceado */
    let balance = this.getBalance(node);

    console.log(
      `inserimos ${key}, estamos verificando ${node.key}. altura - ${node.height} balance - ${balance}`
    );

    // Se o nó estiver desbalanceado, existem 4 casos de rotação
    //  Left Left
    if (balance > 1 && key < node.left.key) {
      console.log("ROTAÇÃO LEFT LEFT");
      return this.rightRotate(node);
    }

    // Right Right
    if (balance < -1 && key > node.right.key) {
      console.log("ROTAÇÃO RIGHT RIGHT");

      return this.leftRotate(node);
    }

    // Left Right
    if (balance > 1 && key > node.left.key) {
      console.log("ROTAÇÃO LEFT RIGHT");
      console.log(
        `Inserimos ${key} - nó atual ${node.key} - filho a esquerda de nó é ${node.left.key}`
      );
      node.left = this.leftRotate(node.left);
      return this.rightRotate(node);
    }

    // Right Left
    if (balance < -1 && key < node.right.key) {
      console.log("ROTAÇÃO RIGHT LEFT");
      console.log(
        `Inserimos ${key} - nó atual ${node.key} - filho a direita de nó é ${node.right.key}`
      );
      node.right = this.rightRotate(node.right);
      return this.leftRotate(node);
    }

    /* retorna o nó */
    return node;
  }


  preOrder(node) {
    if (node != null) {
      let balance = this.getBalance(node);
      console.log(`${node.key} -- balance = ${balance}`);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }
}
let tree = new AVLTree();

tree.root = tree.insert(tree.root, 10);
console.log("==========");
tree.root = tree.insert(tree.root, 20);
console.log("==========");
tree.root = tree.insert(tree.root, 30);
console.log("==========");
tree.root = tree.insert(tree.root, 40);
console.log("==========");
tree.root = tree.insert(tree.root, 50);
console.log("===========================================================");
tree.root = tree.insert(tree.root, 25);
/* 
            30
            / \
           20 40
          / \   \
         10 25  50
        */

tree.preOrder(tree.root);

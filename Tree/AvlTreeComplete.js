// Create node
const Node = function(item){
    this.item = item;
    this.height = 1;
    this.left = null;
    this.right = null;
  }
  
  //AVL Tree
  const AVLTree = function(){
    let root = null;
    
    this.height = (N) => {
      if (N === null){
        return 0;
      }
      
      return N.height;
    }
    
    //right 
    this.rightRotate = (y) => {
      let x = y.left;
      let T2 = x.right;
      x.right = y;
      y.left = T2;
      y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
      x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
      return x;
    }
    
    //left 
    this.leftRotate = (x) => {
      let y = x.right;
      let T2 = y.left;
      y.left = x;
      x.right = T2;
      x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
      y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
      return y;
    }
    
    this.getBalanceFactor = (N) => {
      if (N == null){
        return 0;
      }
      
      return this.height(N.left) - this.height(N.right);
    }
    
    
    const insertNodeHelper = (node, item) => {
  
      if (node === null){
        return (new Node(item));
      }
      
      if (item < node.item){
        node.left = insertNodeHelper(node.left, item);
      }else if (item > node.item){
        node.right = insertNodeHelper(node.right, item);
      }else{
        return node;
      }
      
    
      node.height = 1 + Math.max(this.height(node.left), this.height(node.right));
      
      let balanceFactor = this.getBalanceFactor(node);
      
      if (balanceFactor > 1) {
        if (item < node.left.item) {
          return this.rightRotate(node);
        } else if (item > node.left.item) {
          node.left = this.leftRotate(node.left);
          return this.rightRotate(node);
        }
      }
      
      if (balanceFactor < -1) {
        if (item > node.right.item) {
          return this.leftRotate(node);
        } else if (item < node.right.item) {
          node.right = this.rightRotate(node.right);
          return this.leftRotate(node);
        }
      }
      
      return node;
    }
    
    this.insertNode = (item) => {
      root = insertNodeHelper(root, item);
    }
    
    this.nodeWithMimumValue = (node) => {
      let current = node;
      while (current.left !== null){
        current = current.left;
      }
      return current;
    }
    
    const deleteNodeHelper = (root, item) => {
  
      if (root == null){
        return root;
      }
      if (item < root.item){
        root.left = deleteNodeHelper(root.left, item);
      }else if (item > root.item){
        root.right = deleteNodeHelper(root.right, item);
      }else {
        if ((root.left === null) || (root.right === null)) {
          let temp = null;
          if (temp == root.left){
            temp = root.right;
          }else{
            temp = root.left;
          }
          
          if (temp == null) {
            temp = root;
            root = null;
          } else{
            root = temp;
          }
        } else {
          let temp = this.nodeWithMimumValue(root.right);
          root.item = temp.item;
          root.right = deleteNodeHelper(root.right, temp.item);
        }
      }
      if (root == null){
        return root;
      }
  
      root.height = Math.max(this.height(root.left), this.height(root.right)) + 1;
      
      let balanceFactor = this.getBalanceFactor(root);
      if (balanceFactor > 1) {
        if (this.getBalanceFactor(root.left) >= 0) {
          return this.rightRotate(root);
        } else {
          root.left = this.leftRotate(root.left);
          return this.rightRotate(root);
        }
      }
      if (balanceFactor < -1) {
        if (this.getBalanceFactor(root.right) <= 0) {
          return this.leftRotate(root);
        } else {
          root.right = this.rightRotate(root.right);
          return this.leftRotate(root);
        }
      }
      return root;
    }
    
    this.deleteNode = (item) => {
      root = deleteNodeHelper(root, item);
    }
    
    this.preOrder = () => {
      preOrderHelper(root);
    }
    
    const preOrderHelper = (node) => {
      if (node) {
        console.log(node.item);
        preOrderHelper(node.left);
        preOrderHelper(node.right);
      }
    }
  }

let tree = new AVLTree();
tree.insertNode(33);
tree.insertNode(13);
tree.insertNode(53);
tree.insertNode(9);
tree.insertNode(21);
tree.insertNode(61);
tree.insertNode(8);
tree.insertNode(11);
tree.preOrder();
tree.deleteNode(13);
console.log("após deletar: ");
tree.preOrder();
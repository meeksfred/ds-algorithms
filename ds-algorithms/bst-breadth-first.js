'use strict';

// Breath First Search - BST

function breadthFirstSearch(root){
  // let answer = [];
  let bstQueue = new Queue();
  let node;
  bstQueue.enqueue(root);

  while(!bstQueue.isEmpty()){
    node = bstQueue.dequeue();
    console.log(node.value); // or answer.push(node.value);
    if(node.left) bstQueue.enqueue(node.left);
    if(node.right) bstQueue.enqueue(node.right);
  }
  // return answer;
}

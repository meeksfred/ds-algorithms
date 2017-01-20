// Depth First Search - BST

function depthFirstSearch(root){
  // let answer = [];
  _depthFirst(root);

  function _depthFirst(node){
    if(node.left) _depthFirst(node.left);
    console.log(node.value);
    // answer.push(node.value);
    if(node.right) _depthFirst(node.right);
  }
  // return answer;
}

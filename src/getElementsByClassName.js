var getElementsByClassName = function(className, node) {
  var result = [];
  node = node || document.body;
  if (node.classList) { // text nodes have undefined classList
    if (node.classList.contains(className)) {
      result.push(node);
    }
  }
  node.childNodes.forEach(function(childNode) { 
    // childNodes is always an array, even if it's empty for text nodes
    result = result.concat(
      getElementsByClassName(className, childNode));
  });
  return result;
};
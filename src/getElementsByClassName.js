const getElementsByClassName = (className, node = document.body) => {
  let result = [];
  if (node.classList) { // text nodes have undefined classList
    if (node.classList.contains(className)) {
      result.push(node);
    }
  }
  for (let childNode of node.childNodes) {
    // childNodes is always an array, even if it's empty for text nodes
    result = result.concat(
      getElementsByClassName(className, childNode));
  }
  return result;
};
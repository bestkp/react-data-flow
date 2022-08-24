export const deepCopy = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

export function HashCode(hashLength) {
  // 默认长度 16
  return Array.from(Array(Number(hashLength) || 15), () =>
    Math.floor(Math.random() * 36).toString(36)
  ).join("");
}

export function updateObj(obj, newNode) {
  if (newNode.preId === "root") {
    obj.childNode = newNode;
  } else {
    for (let key in obj) {
      if (obj.childNode.nodeId === newNode.preId) {
        obj.childNode.childNode = newNode;
      } else {
        updateObj(obj.childNode, newNode);
      }
    }
  }
}
export function delChildFromObj(obj1, node1) {
  let isFound = false;
  return function delFunc (obj, node) {
    if (obj.childNode) {
      if (obj.childNode.nodeId === node.nodeId) {
        obj.childNode = node.childNode;
        isFound = true;
      } else {
        delFunc(obj.childNode, node);
      }
    } else if (obj.type === 4 && obj.conditionNodes.length) {
      for(let condNode of obj.conditionNodes) {
        if(!isFound) {
          delFunc(condNode, node);
        }
      }
    }
  }(obj1, node1)
}

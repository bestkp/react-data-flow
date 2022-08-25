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
export function delChildFromObj(originObj, toDelData) {
  let isFound = false; // 用于处理删除条件分支里的node，如果找到就不继续执行
  return (function delFunc(obj, node) {
    //  先判断当前节点是条件节点
    if (obj.type === 4 && obj.conditionNodes.length) {
      // 循环查找每一条分支
      for (let condNode of obj.conditionNodes) {
        if (!isFound) {
          // 如果没找到，就找下一条分支
          delFunc(condNode, node);
        }
      }
    }
    // 如果分支里没找到，查找分支的子node
    if (obj.childNode) {
      // 如果有子节点，判断子节点是不是要被删除的node
      // 如果是，把要删除节点的子节点设置为当前节点的子节点
      if (obj.childNode.nodeId === node.nodeId) {
        obj.childNode = node.childNode;
        isFound = true; // 已经找到要删除的节点
      } else {
        // 如果没找到，依次去子节点中查找
        delFunc(obj.childNode, node);
      }
    }
  })(originObj, toDelData);
}

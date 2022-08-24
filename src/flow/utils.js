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

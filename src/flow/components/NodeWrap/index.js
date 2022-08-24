import React, { useState } from "react";
import "./index.scss";
import RouteNode from "../RouteNode";
import CommonNode from "../CommonNode";
const NodeWrap = ({ nodeConfig, flowPermission }) => {
  /**
   * nodeConfig:
   * type: // 0 产品节点 1 文本 2 图片 3 条件 4 路由
   */
  const delNode = () => {};
  return (
    <div className="node-render">
      {nodeConfig.type !== 4 ? (
        <CommonNode nodeConfig={nodeConfig} delNode={delNode}></CommonNode>
      ) : null}
      {nodeConfig.type === 4 ? (
        <RouteNode nodeConfig={nodeConfig} delNode={delNode}></RouteNode>
      ) : null}
      {nodeConfig.childNode ? (
        <NodeWrap nodeConfig={nodeConfig.childNode}></NodeWrap>
      ) : (
        ""
      )}
    </div>
  );
};

export default NodeWrap;

import React, {useContext, useState} from "react";
import "./index.scss";
import RouteNode from "../RouteNode";
import CommonNode from "../CommonNode";
import {deepCopy, delChildFromObj} from "../../utils";
import {FlowContext} from "../../store/context";
const NodeWrap = ({ nodeConfig, flowPermission }) => {
  const { data, setData } = useContext(FlowContext);
  /**
   * nodeConfig:
   * type: // 0 产品节点 1 文本 2 图片 3 条件 4 路由
   */
  const delNode = (preData) => {
    console.log('del', preData)
    delChildFromObj(data, preData);
    // preData = preData.childNode;
    // console.log(preData, data)
    setData(deepCopy(data))
  };
  const handleAdd = (preData, addData) => {
    preData.childNode = addData;
    setData(deepCopy(data));
  };
  return (
    <div className="node-render">
      {nodeConfig.type !== 4 ? (
        <CommonNode nodeConfig={nodeConfig} onAdd={handleAdd} delNode={delNode}></CommonNode>
      ) : null}
      {nodeConfig.type === 4 ? (
        <RouteNode nodeConfig={nodeConfig} onAdd={handleAdd} delNode={delNode}></RouteNode>
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

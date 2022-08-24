import React, { useContext } from "react";
import AddNode from "../AddNode";
import NodeWrap from "../NodeWrap";
import { Button, Space } from "antd";
import { deepCopy } from "../../utils";
import { FlowContext } from "../../store/context";
import "./index.scss";
import Icon from "../Icon";

const RouteNode = ({ nodeConfig }) => {
  const { data, setData } = useContext(FlowContext);
  const addTerm = () => {};
  const delTerm = () => {};
  const handleAdd = (preData, addData) => {
    preData.childNode = addData;
    setData(deepCopy(data));
  };
  return (
    <div className="branch-wrap">
      <div className="branch-box-wrap">
        <div className="branch-box">
          <div className={`node-wrap-box branch-box-node`}>
            <div className="top-line" />
            <div>
              <div className="title">
                <span className={"one-line-ellipse"}>选项</span>
                <Space>
                  <Icon name="icon-fuzhi1" />
                  <Icon name="icon-shanchu1" />
                </Space>
              </div>
              <div className="content">
                <div className="text">选项标题</div>
                <Icon size={16} name={"icon-A-fanyeyou"} />
              </div>
            </div>
          </div>
          {nodeConfig.conditionNodes.length &&
            nodeConfig.conditionNodes.map((item, index) => {
              return (
                <div className="col-box" key={index}>
                  <div className="condition-node">
                    <div className="condition-node-box">
                      <div
                        className={`auto-judge ${
                          item.error ? "active error" : ""
                        }`}
                      >
                        <div
                          className="content"
                          onClick={() => setPerson(item.priorityLevel)}
                        >
                          <div className="content-pic"></div>
                          <div className="content-text">产品的名称1111111</div>
                        </div>
                      </div>
                      <AddNode
                        currentNode={item}
                        onUpdateChildNodeP={handleAdd}
                        childNodeP={item.childNode}
                      ></AddNode>
                    </div>
                  </div>
                  {item.childNode && (
                    <NodeWrap nodeConfig={item.childNode}></NodeWrap>
                  )}
                  {index === 0 ? (
                    <div className="top-left-cover-line"></div>
                  ) : null}
                  {index === 0 ? (
                    <div className="bottom-left-cover-line"></div>
                  ) : null}
                  {index == nodeConfig.conditionNodes.length - 1 ? (
                    <div className="top-right-cover-line"></div>
                  ) : null}
                  {index == nodeConfig.conditionNodes.length - 1 ? (
                    <div
                      className="bottom-right-cover-line"
                      v-if="index==nodeConfig.conditionNodes.length-1"
                    ></div>
                  ) : null}
                </div>
              );
            })}
        </div>
        <AddNode
          currentNode={nodeConfig}
          onUpdateChildNodeP={handleAdd}
          childNodeP={nodeConfig.childNode}
        ></AddNode>
      </div>
      {/*{nodeConfig.childNode && (*/}
      {/*  <NodeWrap nodeConfig={nodeConfig.childNode}></NodeWrap>*/}
      {/*)}*/}
    </div>
  );
};
export default RouteNode;

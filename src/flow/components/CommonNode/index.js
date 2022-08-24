import React, { useContext } from "react";
import AddNode from "../AddNode";
import { FlowContext } from "../../store/context";
import { deepCopy, updateObj } from "../../utils";
import Icon from "../Icon";
import { Space } from "antd";
const NODE_TOP_LINE_COLOR_LIST = ["#FF8A8A", "#64C8BC", "#8ABEFF", "#FFC68A"]

const CommonNode = ({ nodeConfig, delNode, onClick }) => {
  const { data, setData } = useContext(FlowContext);
  const handleAdd = (preData, addData) => {
    preData.childNode = addData;
    setData(deepCopy(data));
  };
  return (
    <div className="node-wrap">
      <div
        className={`node-wrap-box ${
          nodeConfig.type === 0 ? "start-node" : ""
        } ${nodeConfig.error ? "active error" : ""}`}
      >
        <div className={`top-line`} style={{background: NODE_TOP_LINE_COLOR_LIST[nodeConfig.type]}} />
        <div>
          <div className="title">
            <span className={"one-line-ellipse"}>{nodeConfig.nodeName}</span>
            {nodeConfig.type === 0 && <Icon name="icon-lianjie1" />}
            {nodeConfig.type !==0 && (
              <Space>
                <Icon name="icon-fuzhi1" />
                <Icon name="icon-shanchu1" />
              </Space>
            )}
          </div>
          <div className="content" onClick={onClick}>
            {nodeConfig.type === 0 ? (
              <div className="text">请选择产品111111111</div>
            ) : (
              <div className="placeholder">请选择产品</div>
            )}
            <Icon size={16} name={"icon-A-fanyeyou"} />
          </div>
        </div>
      </div>
      <AddNode
        currentNode={nodeConfig}
        childNodeP={nodeConfig.childNode}
        onUpdateChildNodeP={handleAdd}
      />
    </div>
  );
};
export default CommonNode;

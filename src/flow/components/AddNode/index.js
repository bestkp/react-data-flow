import React, { useContext, useEffect, useState } from "react";
import { Button, Popover } from "antd";
import "./index.scss";
import { HashCode } from "../../utils";
import Icon from "../Icon";

const AddNode = ({ currentNode, childNodeP, onUpdateChildNodeP }) => {
  const [visible, setVisible] = useState(false);
  const addType = (type) => {
    setVisible(false);
    if (type !== 4) {
      let data;
      if (type === 1) {
        const nodeId = HashCode();
        data = {
          nodeName: 1 + nodeId,
          error: true,
          type: 1,
          nodeId,
          preId: null,
          childNode: childNodeP,
          nodeUserList: [],
        };
      } else if (type === 2) {
        const nodeId = HashCode();
        data = {
          nodeName: 2 + nodeId,
          type: 2,
          nodeId,
          preId: null,
          childNode: childNodeP,
          nodeUserList: [],
        };
      }
      onUpdateChildNodeP(currentNode, data);
    } else {
      const nodeId = HashCode();
      onUpdateChildNodeP(currentNode, {
        nodeName: "路由" + nodeId,
        type: 4,
        nodeId,
        preId: null,
        childNode: null,
        conditionNodes: [
          {
            nodeName: "条件1",
            error: true,
            type: 3,
            nodeId: HashCode(),
            preId: null,
            priorityLevel: 1,
            conditionList: [],
            nodeUserList: [],
            childNode: childNodeP,
          },
          {
            nodeName: "条件2",
            type: 3,
            nodeId: HashCode(),
            preId: null,
            priorityLevel: 2,
            conditionList: [],
            nodeUserList: [],
            childNode: null,
          },
        ],
      });
    }
  };
  const hidePopover = () => {
    setVisible(false);
  };
  useEffect(() => {
    document.body.addEventListener("click", hidePopover, false);
    return () => {
      document.body.removeEventListener("click", hidePopover, false);
    };
  }, []);
  const PopoverContent = () => {
    return (
      <div>
        <div className="add-node-popover-body">
          <a
            className="add-node-popover-item approver"
            onClick={() => addType(1)}
          >
            <p>文本</p>
          </a>
          {/*<a*/}
          {/*  className="add-node-popover-item notifier"*/}
          {/*  onClick={() => addType(2)}*/}
          {/*>*/}
          {/*  <p>图片</p>*/}
          {/*</a>*/}
          <a
            className="add-node-popover-item condition"
            onClick={() => addType(4)}
          >
            <p>选项</p>
          </a>
        </div>
      </div>
    );
  };
  return (
    <div className="add-node-btn-box">
      <div className="add-node-btn">
        <Popover
          overlayClassName={"add-node-popover"}
          content={PopoverContent}
          placement={"bottom"}
          trigger={"click"}
          arrowPointAtCenter
          align={{
            offset: [0, -12]
          }}
          visible={visible}
        >
          <div
            className={'add-node-span'}
            onClick={(e) => {
              e.stopPropagation();
              setVisible(true);
            }}
          >
            <Icon size={16} color={"#92929D"} name={"icon-tianjia1"} />
          </div>
        </Popover>
      </div>
    </div>
  );
};
export default AddNode;

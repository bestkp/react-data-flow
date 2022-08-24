import React, { useContext, useEffect, useState } from "react";
import Flow from "./flow/Flow";
import { Button, message } from "antd";
import { getWorkFlowData, setWorkFlowData } from "./flow/api/api";
import { FlowContext } from "./flow/store/context";
import "./flow/iconfont";
import "antd/dist/antd.min.css";
import "./App.css";

function App() {
  const [tipList, setTipList] = useState([]);
  const [tipVisible, setTipVisible] = useState(false);
  const [processConfig, setProcessConfig] = useState({});
  const [nodeConfig, setNodeConfig] = useState({
    "nodeName": "产品",
    "type": 0,
    "nodeId": "root",
    "preId": null,
    "conditionList": [],
    "nodeUserList": [],
    "childNode": null,
    "conditionNodes": []
  });
  const [workFlowDef, setWorkFlowDef] = useState({});
  const [flowPermission, setFlowPermission] = useState([]);
  const [directorMaxLevel, setDirectorMaxLevel] = useState(0);
  const [tableId, setTableId] = useState("");

  // const reErr = async ({ childNode }) => {
  //   let newTipList = [...tipList];
  //   if (childNode) {
  //     let { type, error, nodeName, conditionNodes } = childNode;
  //     if (type == 1 || type == 2) {
  //       if (error) {
  //         newTipList.push({
  //           name: nodeName,
  //           type: ["", "审核人", "抄送人"][type],
  //         });
  //         setTipList(newTipList);
  //       }
  //       await reErr(childNode);
  //     } else if (type == 3) {
  //       await reErr(childNode);
  //     } else if (type == 4) {
  //       await reErr(childNode);
  //       for (let i = 0; i < conditionNodes.length; i++) {
  //         if (conditionNodes[i].error) {
  //           newTipList.push({ name: conditionNodes[i].nodeName, type: "条件" });
  //           setTipList(newTipList);
  //         }
  //         reErr(conditionNodes[i]);
  //       }
  //     }
  //   } else {
  //     childNode = null;
  //   }
  // };

  const saveSet = async () => {
    // this.setIsTried(true)
    setTipList([]);
    // await reErr(nodeConfig);
    // if (tipList.length != 0) {
    //   this.tipVisible = true;
    //   return;
    // }
    // const newProcessConfig = { ...processConfig };
    // newProcessConfig.flowPermission = flowPermission;
    // setProcessConfig(newProcessConfig);
    console.log(JSON.stringify(nodeConfig), nodeConfig);
    // let res = await setWorkFlowData(newProcessConfig);
    message.success("设置成功");
  };

  const handleUpdateNodeConfig = (data) => {
    setNodeConfig(data);
  };
  const onUpdateChildNodeP = (data) => {
    setNodeConfig(data);
  };
  const handleUpdate = () => {
    const aa = JSON.parse(JSON.stringify(nodeConfig));
    aa.nodeName = "我更新了";
    setNodeConfig(aa);
  };
  useEffect(() => {
    // getWorkFlowData({}).then(({ data }) => {
    //   setProcessConfig(data);
    //   let {
    //     nodeConfig,
    //     flowPermission,
    //     directorMaxLevel,
    //     workFlowDef,
    //     tableId,
    //   } = data;
    //   setNodeConfig(nodeConfig);
    //   setFlowPermission(flowPermission);
    //   setDirectorMaxLevel(directorMaxLevel);
    //   setWorkFlowDef(workFlowDef);
    //   setTableId(tableId);
    // });
  }, []);
  return (
    <FlowContext.Provider
      value={{
        data: nodeConfig,
        setData: setNodeConfig,
      }}
    >
      <div className="App1">
        <div style={{ textAlign: "right", marginBottom: 24 }}>
          <Button onClick={saveSet}>
            发布
          </Button>
          <Button onClick={handleUpdate}>
            更新
          </Button>
        </div>
        <Flow
          nodeConfig={nodeConfig}
          flowPermission={flowPermission}
        ></Flow>
      </div>
    </FlowContext.Provider>
  );
}

export default App;

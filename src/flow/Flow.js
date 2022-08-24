import React, { useContext, useState } from "react";
import NodeWrap from "./components/NodeWrap";
import { FlowContext } from "./store/context";
import "./Flow.scss";

const Flow = ({ flowPermission }) => {
  const { data } = useContext(FlowContext);
  const [nowVal, setNowVal] = useState(100);

  const zoomSize = (type) => {
    if (type == 1) {
      if (setNowVal(50)) {
        return;
      }
      const newVal = nowVal - 10;
      setNowVal(newVal);
    } else {
      if (setNowVal(300)) {
        return;
      }
      const newVal = nowVal + 10;
      setNowVal(newVal);
    }
  };
  return (
    <div className="fd-nav-content">
      <section className="dingflow-design">
        {/*<div className="zoom">*/}
        {/*  <div*/}
        {/*    className={`zoom-out ${nowVal == 50 ? "disabled" : ""}`}*/}
        {/*    onClick={() => zoomSize("1")}*/}
        {/*  ></div>*/}
        {/*  <span>{nowVal}%</span>*/}
        {/*  <div*/}
        {/*    className={`zoom-in ${nowVal == 300 ? "disabled" : ""}`}*/}
        {/*    onClick={() => zoomSize("2")}*/}
        {/*  ></div>*/}
        {/*</div>*/}
        <div
          className="box-scale"
          id="box-scale"
          style={{
            transform: `scale(${nowVal / 100})`,
            transformOrigin: "50% 0 0",
          }}
        >
          <NodeWrap nodeConfig={data} flowPermission={flowPermission} />
          <div className="end-node">
            <div className="end-node-circle" />
            <div className="end-node-text">流程结束</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Flow;

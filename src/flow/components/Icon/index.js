import React from "react";
import "./index.scss";

const Icon = ({ name, className = "", color = "", size = "" }) => {
  return (
    <svg
      className={`icon  ${className}`}
      style={{
        color: color,
        fontSize: size + "px",
      }}
      aria-hidden="true"
    >
      <use xlinkHref={`#${name}`}></use>
    </svg>
  );
};

export default Icon;

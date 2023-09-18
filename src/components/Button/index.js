import React from "react";
import "./index.css";
import { Button as AntButton } from "antd";

const Button = (props) => {
  return (
    <AntButton
      className="sexy-button"
      disabled={props.disabled}
      href={props.disabled}
      icon={props.icon}
      loading={props.loading}
      htmlType={props.htmlType}
      onClick={props.onClick}
      size={props.size}
      type={props.type}
    >
      {props.children}
    </AntButton>
  );
};

export default Button;

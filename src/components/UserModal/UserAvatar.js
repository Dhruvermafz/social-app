import React from "react";
import { Avatar as AntdAvatar } from "antd";

const UserAvatar = ({ username, size }) => {
  return (
    <AntdAvatar
      size={size}
      style={{
        backgroundColor: "lightgray",
      }}
      src={"https://robohash.org/" + username}
    />
  );
};

export default UserAvatar;

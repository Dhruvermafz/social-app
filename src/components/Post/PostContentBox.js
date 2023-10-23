import { Card } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const PostContentBox = ({ clickable, post, editing, children }) => {
  const history = useNavigate();

  const handleClick = () => {
    if (clickable && !editing) {
      history.push(`/blog/${post._id}`);
    }
  };

  return (
    <Card
      hoverable={clickable && !editing}
      onClick={handleClick}
      style={{
        padding: "16px",
      }}
    >
      {children}
    </Card>
  );
};

export default PostContentBox;

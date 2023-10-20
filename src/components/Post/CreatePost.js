import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";

const CreatePost = () => {
  return (
    <Link to="/blog/create">
      <Button type="default" size="middle" icon={<PlusOutlined />}>
        New Post
      </Button>
    </Link>
  );
};

export default CreatePost;

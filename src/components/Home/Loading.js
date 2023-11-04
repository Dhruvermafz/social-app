import React from "react";
import { Spin, Space, Typography } from "antd";

const Loading = ({ label }) => {
  return (
    <Space direction="vertical" align="center">
      <Spin size="large" style={{ margin: "16px 0" }} />
      <Typography.Text type="secondary" style={{ marginBottom: "24px" }}>
        {label || "Loading"}
      </Typography.Text>
    </Space>
  );
};

export default Loading;

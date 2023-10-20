import React from "react";
import { Typography, Divider, Row } from "antd";

const FetchFail = () => {
  return (
    <Row justify="center" style={{ marginTop: "2rem" }}>
      <Divider />
      <Typography.Text type="secondary" style={{ fontSize: "1.5rem" }}>
        Something went wrong!
      </Typography.Text>
      <Divider />
    </Row>
  );
};

export default FetchFail;

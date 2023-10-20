import React from "react";
import { Row, Col } from "antd";

const GridLayout = (props) => {
  const { left, right } = props;

  return (
    <Row gutter={16}>
      <Col xs={24} md={16}>
        {left}
      </Col>
      <Col xs={0} md={8}>
        {right}
      </Col>
    </Row>
  );
};

export default GridLayout;

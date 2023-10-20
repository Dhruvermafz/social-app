import React from "react";
import { Row, Col, Typography } from "antd";
import UserAvatar from "./UserAvatar";
import { Link } from "react-router-dom";

const UserEntry = ({ username }) => {
  return (
    <Row justify="space-between" key={username} align="middle">
      <Col>
        <Row align="middle">
          <UserAvatar size={30} username={username} />
          <Typography.Text>{username}</Typography.Text>
        </Row>
      </Col>
    </Row>
  );
};

export default UserEntry;

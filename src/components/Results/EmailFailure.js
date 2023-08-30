import React from "react";
import { Button, Form, Input, message, Result, Row } from "antd";
import Banner from "../Banner";

const EmailFailure = () => {
  return (
    <div>
      <Banner />

      <Result
        status="error"
        title="Invalid Confimration Link"
        subTitle="You have just used an expired or invalid email verification link. Please request a new one to continue with ItsABlog."
        extra={
          <Row justify="center">
            <Form.Item>
              <Input
                size="large"
                placeholder="Type your email address here....."
              />
            </Form.Item>
            &nbsp; &nbsp; &nbsp;
            <Button
              type="primary"
              onClick={() =>
                message.info("This feature is currently inactive!")
              }
              size="large"
            >
              Request a new one
            </Button>
          </Row>
        }
      />
    </div>
  );
};

export default EmailFailure;

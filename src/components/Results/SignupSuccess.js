import React from "react";
import Banner from "../Banner";
import { Button, Row, Result, message } from "antd";

const SignupSuccess = () => {
  return (
    <div>
      <Banner />
      <Result
        status="success"
        title="Account Created"
        subTitle="A confirmation email have been sent to the email address you provided. Please verify your email address to continue."
        extra={
          <Row justify="center">
            <a href="https://mail.google.com/mail/" rel="noopener noreferrer">
              <Button type="danger" size="large">
                Open Gmail
              </Button>
            </a>
            &nbsp; &nbsp; &nbsp;
            <Button
              type="primary"
              size="large"
              onClick={() =>
                message.info("This feature os currently inactive!")
              }
            >
              Resend Confimation Mail
            </Button>
          </Row>
        }
      />
    </div>
  );
};

export default SignupSuccess;

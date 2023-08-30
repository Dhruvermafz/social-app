import React from "react";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";
import Banner from "../Banner";

const EmailSuccess = () => {
  return (
    <div>
      <Banner />

      <Result
        status="success"
        title="Email Confirmed & Account Activated"
        subTitle="Login to Continue"
        extra={
          <Link to="/login">
            <Button type="primary" size="large">
              Login
            </Button>
          </Link>
        }
      />
    </div>
  );
};

export default EmailSuccess;

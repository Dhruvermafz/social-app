import React from "react";
import { Alert } from "antd";

const ErrorAlert = ({ error }) => {
  return error && <Alert type="error" showIcon message={error} />;
};

export default ErrorAlert;

import React from "react";
import { Typography } from "antd";
import { Link } from "react-router-dom";

const getCurrentYear = () => {
  const currentYear = new Date().getFullYear();
  return currentYear;
};

const Footer = () => {
  const currentYear = getCurrentYear();

  return (
    <Typography.Text type="secondary">
      &copy; {currentYear} <Link to="/">ItsABlog</Link>. All rights reserved.{" "}
      <Link to="/terms">Terms of Use</Link> |{" "}
      <Link to="/privacy">Privacy Policy</Link> |{" "}
      <Link to="/license">License</Link>
    </Typography.Text>
  );
};

export default Footer;

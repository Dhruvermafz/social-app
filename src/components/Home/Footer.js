import React from "react";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import { itsablog } from "../../static/img/icon.png";
import "../../css/footer.css";
const getCurrentYear = () => {
  const currentYear = new Date().getFullYear();
  return currentYear;
};

const Footer = () => {
  const currentYear = getCurrentYear();

  return (
    <div class="bottombar">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <span class="copyright">
              © ItsABlog {currentYear}. All rights reserved.
            </span>
            <i>
              <img src={itsablog} alt="" />
            </i>
            <Typography.Text type="secondary">
              <Link to="/terms">Terms of Use</Link> |{" "}
              <Link to="/privacy">Privacy Policy</Link> |{" "}
              <Link to="/license">License</Link>
            </Typography.Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

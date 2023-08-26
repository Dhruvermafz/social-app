import React from "react";
import "../css/signup.css";

import {
  blueBook,
  blueBulb,
  blueRead,
  redBook,
  redBulb,
  redRead,
} from "../../static";

const images = [blueBook, blueBulb, blueRead, redBook, redBulb, redRead];

const Layout = (props) => {
  const image = images[Math.floor(Math.random() * images.length)];
  return (
    <div className="auth">
      <div className="auth-layout">
        <div className="auth-left">
          <img src={image} className="auth-img" alt="Idea pen" />
        </div>

        <div className={`auth-right ${props.className}`}>{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;

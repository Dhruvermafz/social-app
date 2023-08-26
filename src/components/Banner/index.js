import React from "react";
import "./index.css";
import { icon } from "../../static";
const Banner = () => {
  return (
    <div className="banner">
      <img src={icon} alt={icon} />
      <strong>ItsABlog</strong>
    </div>
  );
};

export default Banner;

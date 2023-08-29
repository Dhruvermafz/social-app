import React from "react";
import "./index.css";
import { icon } from "../../static";
const Banner = () => {
  return (
    <header className="banner">
      <img src={icon} alt={icon} />
      <strong>ItsABlog</strong>
    </header>
  );
};

export default Banner;

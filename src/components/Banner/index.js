import React from "react";
import "./index.css";
import { icon } from "../../static";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <header className="banner">
      <Link to="/" color="inherit">
        <img src={icon} alt={icon} />
        <strong>ItsABlog</strong>
      </Link>
    </header>
  );
};

export default Banner;

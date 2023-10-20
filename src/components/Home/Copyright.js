import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const getCurrentYear = () => {
  const currentYear = new Date().getFullYear();
  return currentYear;
};

const Copyright = () => {
  const currentYear = getCurrentYear();

  return (
    <div>
      <Typography variant="subtitle1" color="text.secondary">
      &copy; {currentYear}{" "}
      <Link to="/" color="inherit">
        ItsABlog
      </Link>
      . All rights reserved.{" "}
      <Link to="/terms" color="inherit">
        Terms of Use
      </Link>{" "}
      |{" "}
      <Link to="/privacy" color="inherit">
        Privacy Policy
      </Link>{" "}
      |{" "}
      <Link to="/license" color="inherit">
        License
      </Link>
    </Typography>
    </div>
  );
};

export default Copyright;

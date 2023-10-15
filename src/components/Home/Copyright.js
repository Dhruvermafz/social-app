import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Copyright = () => {
  return (
    <Typography variant="subtitle1" color="text.secondary">
      Copyright © {new Date().getFullyear()}{" "}
      <Link to="/" color="inherit">
        ItsABlog
      </Link>
    </Typography>
  );
};

export default Copyright;

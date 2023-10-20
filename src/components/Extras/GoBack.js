import React from "react";
import { Typography } from "antd";
import { Link } from "react-router-dom";

const GoBack = () => {
  return (
    <Typography style={{ marginBottom: "2px" }}>
      <Link to="/"> &lt;&lt; Go back to posts</Link>
    </Typography>
  );
};

export default GoBack;

import { Card, Grid, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <Box pb={3}>
      <Card>
        <Typography variant="subtitle1">
          <a href="https://github.com/Dhruvermafz/social-app" target="_blank">
            Repo
          </a>
          ! ⭐
        </Typography>
      </Card>
    </Box>
  );
};

export default Footer;

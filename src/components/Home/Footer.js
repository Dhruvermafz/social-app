import React from "react";
import { Box, Link, Typography, Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import InfoIcon from "@mui/icons-material/Info";
import SettingsIcon from "@mui/icons-material/Settings";
import PolicyIcon from "@mui/icons-material/Policy";
import Copyright from "./Copyright";

const getCurrentYear = () => {
  const currentYear = new Date().getFullYear();
  return currentYear;
};

const Footer = ({ darkmode, navigate }) => {
  const currentYear = getCurrentYear();

  return (
    <Box
      bgcolor={darkmode ? "#1A1B1E" : "white"}
      marginBottom="0.5rem"
      borderRadius="4px"
      padding="1rem"
      color={darkmode ? "#c1c2c5" : "black"}
    >
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <Link
            href="https://github.com/Dhruvermafz/client-momo"
            target="_blank"
            underline="none"
          >
            <GitHubIcon fontSize="large" />
            <Typography variant="subtitle1">GitHub</Typography>
          </Link>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Link to="/about" underline="none">
            <InfoIcon fontSize="large" />
            <Typography variant="subtitle1">About</Typography>
          </Link>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Link to="/settings" underline="none">
            <SettingsIcon fontSize="large" />
            <Typography variant="subtitle1">Settings</Typography>
          </Link>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Link
            href="https://discord.gg/n32dAAcCJY"
            target="_blank"
            underline="none"
          >
            <PolicyIcon fontSize="large" />
            <Typography variant="subtitle1">Discord</Typography>
          </Link>
        </Grid>
      </Grid>
      <Box mt={3}>
        <Typography variant="body2" align="center">
          &copy; {currentYear}{" "}
          <Link to="/" color="inherit" underline="none">
            ItsABlog
          </Link>
          . All rights reserved.{" "}
          <Link to="/terms" color="inherit" underline="none">
            Terms of Use
          </Link>
          {"  "}
          <Link to="/privacy" color="inherit" underline="none">
            Privacy Policy
          </Link>{" "}
          <Link to="/license" color="inherit" underline="none">
            License
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

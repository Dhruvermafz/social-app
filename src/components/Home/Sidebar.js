import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { getPosts } from "../../api/posts";
import { isLoggedIn } from "../../helpers/authHelper";
import FindUsers from "../Extras/FindUsers";
import Footer from "./NavLinks";
import Loading from "./Loading";
import PostCard from "../Post/PostCard";
import TopPosts from "../Post/TopPosts";
import StickyWidget from "../Extras/StickyWidget";

const Sidebar = () => {
  return (
    <Stack spacing={2}>
      <TopPosts />
      <FindUsers />
      <StickyWidget />
    </Stack>
  );
};

export default Sidebar;

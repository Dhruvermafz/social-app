import { Button, Card, Container, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { getPosts } from "../../api/posts";
import { isLoggedIn } from "../../helpers/authHelper";
import CreatePost from "../Post/CreatePost";
import GridLayout from "../Extras/GridLayout";
import Loading from "../Extras/Loading";
import Navbar from "../Extras/Navbar";
import SortBySelect from "../Content/SortBySelect";
import PostCard from "../Post/PostCard";
import Sidebar from "../Extras/Sidebar";
import HorizontalStack from "../util/HorizontalStack";
import PostBrowser from "../Post/PostBrowser";

const ExploreView = () => {
  return (
    <Container>
      <Navbar />
      <GridLayout
        left={<PostBrowser createPost contentType="posts" />}
        right={<Sidebar />}
      />
    </Container>
  );
};

export default ExploreView;

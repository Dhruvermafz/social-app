import { Button, Card, Container, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { getPosts } from "../api/posts";
import { isLoggedIn } from "../helpers/authHelper";
import CreatePost from "../components/Post/CreatePost";
import GridLayout from "../components/Extras/GridLayout";
import Loading from "../components/Home/Loading";
import Navbar from "../components/Home/Navbar";
import SortBySelect from "../components/Content/SortBySelect";
import PostCard from "../components/Post/PostCard";
import Sidebar from "../components/Home/Sidebar";
import HorizontalStack from "../components/util/HorizontalStack";
import PostBrowser from "../components/Post/PostBrowser";

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

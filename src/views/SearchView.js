import { Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import GoBack from "../components/Extras/GoBack";
import GridLayout from "../components/Extras/GridLayout";
import Navbar from "../components/Home/Navbar";
import PostBrowser from "../components/Post/PostBrowser";
import Sidebar from "../components/Home/Sidebar";

const SearchView = () => {
  return (
    <Container>
      <Navbar />
      <GridLayout
        left={
          <Stack spacing={2}>
            <PostBrowser createPost contentType="posts" />
          </Stack>
        }
        right={<Sidebar />}
      />
    </Container>
  );
};

export default SearchView;

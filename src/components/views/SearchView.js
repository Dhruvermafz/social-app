import { Container, Stack } from "@mui/material";
import React from "react";
import GoBack from "../Extras/GoBack";
import GridLayout from "../Extras/GridLayout";
import Navbar from "../Extras/Navbar";
import PostBrowser from "../Post/PostBrowser";
import Sidebar from "../Extras/Sidebar";

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

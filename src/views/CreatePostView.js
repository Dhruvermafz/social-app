import { Container } from "@mui/material";
import React from "react";
import GoBack from "../components/Extras/GoBack";
import GridLayout from "../components/Extras/GridLayout";
import Navbar from "../components/Home/Navbar";
import PostEditor from "../components/Post/PostEditor";
import Sidebar from "../components/Home/Sidebar";

const CreatePostView = () => {
  return (
    <Container>
      <Navbar />
      <GoBack />
      <GridLayout left={<PostEditor />} right={<Sidebar />} />
    </Container>
  );
};

export default CreatePostView;

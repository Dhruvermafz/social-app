import { Container } from "@mui/material";
import React from "react";
import GoBack from "../Extras/GoBack";
import GridLayout from "../Extras/GridLayout";
import Navbar from "../Home/Navbar";
import PostEditor from "../Post/PostEditor";
import Sidebar from "../Home/Sidebar";

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

import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import GridLayout from "../components/Extras/GridLayout";
import Navbar from "../components/Home/Navbar";
import Sidebar from "../components/Home/Sidebar";
import PostBrowser from "../components/Post/PostBrowser";
import { useNavigate } from "react-router-dom";

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

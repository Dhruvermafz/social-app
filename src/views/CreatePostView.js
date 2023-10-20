import React from "react";
import { Layout, Typography } from "antd";
import GoBack from "../components/Extras/GoBack";
import GridLayout from "../components/Extras/GridLayout";
import Navbar from "../components/Home/Navbar";
import PostEditor from "../components/Post/PostEditor";
import Sidebar from "../components/Home/Sidebar";

const { Content } = Layout;

const CreatePostView = () => {
  return (
    <Layout>
      <Navbar />
      <Content>
        {/* <Container> */}
        <GoBack />
        <PostEditor />
        {/* </Container> */}
      </Content>
    </Layout>
  );
};

export default CreatePostView;

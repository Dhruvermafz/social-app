import React from "react";
import { Layout, Row, Col } from "antd";
import GoBack from "../components/Extras/GoBack";
import GridLayout from "../components/Extras/GridLayout";
import Navbar from "../components/Home/Navbar";
import PostBrowser from "../components/Post/PostBrowser";
import Sidebar from "../components/Home/Sidebar";

const { Content } = Layout;

const SearchView = () => {
  return (
    <Layout>
      <Navbar />
      <Content>
        <Row gutter={[16, 16]}>
          <Col span={16}>
            <PostBrowser createPost contentType="posts" />
          </Col>
          <Col span={8}>
            <Sidebar />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default SearchView;

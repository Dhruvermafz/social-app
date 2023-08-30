import React from "react";
import { Layout, Row, Col } from "antd";
import GoBack from "../Extras/GoBack";
import GridLayout from "../Extras/GridLayout";
import Navbar from "../Home/Navbar";
import PostBrowser from "../Post/PostBrowser";
import Sidebar from "../Home/Sidebar";

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

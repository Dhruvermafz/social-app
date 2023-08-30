import React, { useEffect, useState } from "react";
import { Layout, Row, Col } from "antd";
import GoBack from "../Extras/GoBack";
import GridLayout from "../Extras/GridLayout";
import Loading from "../Home/Loading";
import Navbar from "../Home/Navbar";
import PostCard from "../Post/PostCard";
import Sidebar from "../Home/Sidebar";
import { useParams } from "react-router-dom";
import { getPost } from "../../api/posts";
import Comments from "../Comments/Comments";
import ErrorAlert from "../Extras/ErrorAlert";
import { isLoggedIn } from "../../helpers/authHelper";

const { Content } = Layout;

const PostView = () => {
  const params = useParams();

  const [post, setPost] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const user = isLoggedIn();

  const fetchPost = async () => {
    setLoading(true);
    const data = await getPost(params.id, user && user.token);
    if (data.error) {
      setError(data.error);
    } else {
      setPost(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPost();
  }, [params.id]);

  return (
    <Layout>
      <Navbar />
      <GoBack />
      <Content>
        <GridLayout
          left={
            loading ? (
              <Loading />
            ) : post ? (
              <Row gutter={[16, 16]}>
                <Col span={24}>
                  <PostCard post={post} key={post._id} />
                </Col>
                <Col span={24}>
                  <Comments />
                </Col>
              </Row>
            ) : (
              error && <ErrorAlert error={error} />
            )
          }
          right={<Sidebar />}
        />
      </Content>
    </Layout>
  );
};

export default PostView;

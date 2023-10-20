import React, { useEffect, useState } from "react";
import { Card, Typography, Space } from "antd";
import { getPosts } from "../../api/posts";
import { isLoggedIn } from "../../helpers/authHelper";
import Loading from "../Home/Loading";
import PostCard from "./PostCard";
import BookReviews from "../Books/BookReviews"; // Import the BookReviews component
import { HeartOutlined } from "@ant-design/icons";

const { Meta } = Card;

const TopPosts = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState(null);
  const user = isLoggedIn();

  const fetchPosts = async () => {
    const query = { sortBy: "-likeCount" };

    const data = await getPosts(user && user.token, query);

    const topPosts = [];

    if (data && data.data) {
      for (let i = 0; i < 3 && i < data.data.length; i++) {
        topPosts.push(data.data[i]);
      }
    }

    setPosts(topPosts);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Space direction="vertical" style={{ width: "100%" }} size="middle">
      <Card title="Latest Releases" icon={<HeartOutlined />}>
        {!loading ? (
          <div>
            {/* {posts &&
              posts.map((post) => (
                <PostCard preview="secondary" post={post} key={post._id} />
              ))} */}
            <BookReviews />
          </div>
        ) : (
          <Loading />
        )}
      </Card>
    </Space>
  );
};

export default TopPosts;

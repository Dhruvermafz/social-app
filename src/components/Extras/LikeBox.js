import React, { useState } from "react";
import { Button, Space, Typography } from "antd";
import { LikeOutlined, LikeFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../helpers/authHelper";

const LikeBox = (props) => {
  const { likeCount, onLike } = props;
  const [liked, setLiked] = useState(props.liked);

  const navigate = useNavigate();

  const handleLike = (e) => {
    if (isLoggedIn()) {
      const newLikedValue = !liked;
      setLiked(newLikedValue);
      onLike(newLikedValue);
    } else {
      navigate("/login");
    }
  };

  return (
    <Space direction="vertical">
      <Button
        type="text"
        icon={liked ? <LikeFilled /> : <LikeOutlined />}
        onClick={handleLike}
      />
      <Typography>{likeCount}</Typography>
    </Space>
  );
};

export default LikeBox;

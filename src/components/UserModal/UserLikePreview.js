import React, { useState } from "react";
import { Button, Typography, Avatar, Space } from "antd";
import { AiFillLike } from "react-icons/ai";
import UserLikeModal from "./UserLikeModal";

const UserLikePreview = ({ postId, userLikePreview }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    event.stopPropagation();
    setOpen(true);
  };

  let userLikes;
  if (userLikePreview) {
    userLikes = userLikePreview.slice(0, 3);
  }

  return (
    userLikes && (
      <>
        <Button
          type="text"
          icon={<AiFillLike size={20} />}
          onClick={handleClick}
          style={{ color: "#1890ff", display: "flex", alignItems: "center", justifyContent: "center", }}
        >
          <Space size={4} style={{ display: "flex", justifyContent: "center", }}>
            {userLikes &&
              userLikes.map((userLike) => (
                <Avatar
                  src={`https://robohash.org/${userLike.username}`}
                  key={userLike._id}
                  style={{
                    backgroundColor: "lightgray",
                    width: "20px",
                    height: "20px",
                  }}
                />
              ))}
          </Space>
        </Button>
        {open && (
          <UserLikeModal open={open} setOpen={setOpen} postId={postId} />
        )}
      </>
    )
  );
};

export default UserLikePreview;

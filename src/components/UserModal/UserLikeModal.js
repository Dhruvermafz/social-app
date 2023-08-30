import React, { useEffect, useRef, useState } from "react";
import { Modal, Card, Typography, Spin } from "antd";
import { getUserLikes } from "../../api/posts";
import Loading from "../Home/Loading";
import UserEntry from "./UserEntry";

const UserLikeModal = ({ postId, open, setOpen }) => {
  const [userLikes, setUserLikes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMorePages, setHasMorePages] = useState(true);
  const scrollBoxRef = useRef(null);

  const handleClose = () => setOpen(false);

  const fetchUserLikes = async () => {
    if (loading || !hasMorePages) return;

    setLoading(true);

    let anchor = "";
    if (userLikes && userLikes.length > 0) {
      anchor = userLikes[userLikes.length - 1].id;
    }

    const data = await getUserLikes(postId, anchor);

    setLoading(false);
    if (data.success) {
      setUserLikes([...userLikes, ...data.userLikes]);
      setHasMorePages(data.hasMorePages);
    }
  };

  useEffect(() => {
    if (open) {
      fetchUserLikes();
    }
  }, [open]);

  const handleScroll = () => {
    const scrollBox = scrollBoxRef.current;

    if (
      scrollBox.scrollTop + scrollBox.clientHeight >
      scrollBox.scrollHeight - 12
    ) {
      fetchUserLikes();
    }
  };

  useEffect(() => {
    if (!scrollBoxRef.current) {
      return;
    }
    const scrollBox = scrollBoxRef.current;
    scrollBox.addEventListener("scroll", handleScroll);

    return () => {
      scrollBox.removeEventListener("scroll", handleScroll);
    };
  }, [userLikes]);

  return (
    <Modal
      visible={open}
      onCancel={handleClose}
      footer={null}
      width={400}
      centered
    >
      <div
        ref={scrollBoxRef}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Card>
          <Typography.Title level={5} style={{ marginBottom: 16 }}>
            Liked by
          </Typography.Title>
          <div>
            {userLikes &&
              userLikes.map((like) => (
                <UserEntry username={like.username} key={like.username} />
              ))}
          </div>
          <div style={{ textAlign: "center", padding: "16px 0" }}>
            {loading ? (
              <Spin />
            ) : (
              hasMorePages && <div style={{ height: 40 }} />
            )}
          </div>
        </Card>
      </div>
    </Modal>
  );
};

export default UserLikeModal;

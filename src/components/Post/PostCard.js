import React, { useState } from "react";
import {
  Button,
  Card,
  Popover,
  Space,
  Typography,
  Menu,
  Modal,
  message,
  Popconfirm,
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  LikeOutlined,
  LikeFilled,
  MessageFilled,
  MoreOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { deletePost, likePost, unlikePost, updatePost } from "../../api/posts";
import { isLoggedIn } from "../../helpers/authHelper";
import ContentDetails from "../Content/ContentDetails";
import LikeBox from "../Extras/LikeBox";
import PostContentBox from "../Post/PostContentBox";
import HorizontalStack from "../util/HorizontalStack";
import ContentUpdateEditor from "../Content/ContentUpdateEditor";
import Markdown from "../Markdown/Markdown";
import UserLikePreview from "../UserModal/UserLikePreview";
import { Link } from "react-router-dom";
const PostCard = (props) => {
  const { preview, removePost } = props;
  const [loading, setLoading] = useState(false);
  const history = useNavigate();
  const user = isLoggedIn();
  const [anchorEl, setAnchorEl] = useState(null);
  const [editing, setEditing] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [post, setPost] = useState(props.post);
  const [likeCount, setLikeCount] = useState(props.post.likeCount);

  let maxHeight = null;
  if (preview === "primary") {
    maxHeight = 250;
  }

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDeletePost = async (e) => {
    e.stopPropagation();
    if (!confirmDelete) {
      setConfirmDelete(true);
    } else {
      setLoading(true);
      await deletePost(post._id, isLoggedIn());
      setLoading(false);
      if (preview) {
        removePost(post);
      } else {
        history.push("/");
      }
    }
  };

  const handleEditPost = async (e) => {
    e.stopPropagation();
    setEditing(!editing);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const content = e.target.content.value;
    await updatePost(post._id, isLoggedIn(), { content });
    setPost({ ...post, content, edited: true });
    setEditing(false);
  };

  const handleLike = async (liked) => {
    if (liked) {
      setLikeCount((prevCount) => prevCount + 1);
      await likePost(post._id, user);
    } else {
      setLikeCount((prevCount) => prevCount - 1);
      await unlikePost(post._id, user);
    }
  };

  const isAuthor = user?.username === post?.poster?.username;

  return (
    <Card className="post-card" style={{ padding: 0 }}>
      <div className={preview}>
        <HorizontalStack spacing={0} alignItems="initial">
          {/* <Space
              justifyContent="space-between "
              alignItems="center"
              spacing={1}
              style={{
                backgroundColor: "grey.100",
                width: "50px",
                padding: "8px",
              }}
            >
              <LikeBox
                likeCount={likeCount}
                liked={post?.liked}
                onLike={handleLike}
              />
            </Space> */}
          <PostContentBox clickable={preview} post={post} editing={editing}>
            <HorizontalStack justifyContent="space-between">
              <ContentDetails
                username={post?.poster?.username}
                createdAt={post?.createdAt}
                edited={post?.edited}
                preview={preview === "secondary"}
              />
              <Space>
                {user &&
                  (isAuthor || user.isAdmin) &&
                  preview !== "secondary" && (
                    <div>
                      <Popover
                        content={
                          <Menu>
                            <Menu.Item
                              icon={
                                editing ? <EditOutlined /> : <MoreOutlined />
                              }
                              onClick={handleEditPost}
                            >
                              {editing ? "Cancel Edit" : "Edit"}
                            </Menu.Item>
                            <Menu.Item
                              icon={
                                confirmDelete ? (
                                  <LikeFilled />
                                ) : (
                                  <DeleteOutlined />
                                )
                              }
                              onClick={handleDeletePost}
                            >
                              {confirmDelete ? "Confirm Delete" : "Delete"}
                            </Menu.Item>
                          </Menu>
                        }
                        trigger="click"
                        visible={Boolean(anchorEl)}
                        onVisibleChange={handleMenuClose}
                      >
                        <Button type="text" icon={<MoreOutlined />} />
                      </Popover>
                    </div>
                  )}
              </Space>
            </HorizontalStack>

            <Link to={`/blog/${post._id}`}>
              <Typography.Title
                level={5}
                style={{
                  marginBottom: "8px",
                  maxHeight: "125px",
                  overflow: "hidden",
                }}
                className="title"
              >
                {post?.title}
              </Typography.Title>
            </Link>

            {preview !== "secondary" &&
              (editing ? (
                <ContentUpdateEditor
                  handleSubmit={handleSubmit}
                  originalContent={post?.content}
                />
              ) : (
                <div
                  style={{ maxHeight: maxHeight, overflow: "hidden" }}
                  className="content"
                >
                  <Markdown content={post?.content} />
                </div>
              ))}

            <HorizontalStack
              style={{ marginTop: "16px" }}
              justifyContent="space-between"
            >
              <HorizontalStack>
                <LikeBox
                  likeCount={likeCount}
                  liked={post?.liked}
                  onLike={handleLike}
                />
                <MessageFilled />
                <Typography.Text strong style={{ color: "text.secondary" }}>
                  {post?.commentCount}
                </Typography.Text>
              </HorizontalStack>
              <Space>
                <UserLikePreview
                  postId={post?._id}
                  userLikePreview={post?.userLikePreview}
                />
              </Space>
            </HorizontalStack>
          </PostContentBox>
        </HorizontalStack>
      </div>
    </Card>
  );
};

export default PostCard;

import React, { useState } from "react";
import {
  Button,
  Card,
  IconButton,
  Stack,
  Typography,
  useTheme,
  Menu,
  MenuItem,
} from "@mui/material";
import { Box } from "@mui/system";
import { AiFillCheckCircle, AiFillEdit, AiFillMessage } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { deletePost, likePost, unlikePost, updatePost } from "../../api/posts";
import { isLoggedIn } from "../../helpers/authHelper";
import ContentDetails from "../Content/ContentDetails";
import LikeBox from "../Extras/LikeBox";
import PostContentBox from "../Post/PostContentBox";
import HorizontalStack from "../util/HorizontalStack";
import ContentUpdateEditor from "../Content/ContentUpdateEditor";
import Markdown from "../Markdown/Markdown";
import { MdCancel } from "react-icons/md";
import { BiTrash } from "react-icons/bi";
import { BsReplyFill, BsThreeDots } from "react-icons/bs";
import UserLikePreview from "../UserModal/UserLikePreview";

const PostCard = (props) => {
  const { preview, removePost } = props;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const user = isLoggedIn();
  const theme = useTheme();
  const { primary: iconColor, error: errorColor } = theme.palette;
  const [anchorEl, setAnchorEl] = useState(null);
  const [editing, setEditing] = useState(false);
  const [confirm, setConfirm] = useState(false);
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

    if (!confirm) {
      setConfirm(true);
    } else {
      setLoading(true);
      await deletePost(post._id, isLoggedIn());
      setLoading(false);
      if (preview) {
        removePost(post);
      } else {
        navigate("/");
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
    <Card sx={{ padding: 0 }} className="post-card">
      <Box className={preview}>
        <HorizontalStack spacing={0} alignItems="initial">
          <Stack
            justifyContent="space-between "
            alignItems="center"
            spacing={1}
            sx={{
              backgroundColor: "grey.100",
              width: "50px",
              padding: theme.spacing(1),
            }}
          >
            <LikeBox
              likeCount={likeCount}
              liked={post?.liked}
              onLike={handleLike}
            />
          </Stack>
          <PostContentBox clickable={preview} post={post} editing={editing}>
            <HorizontalStack justifyContent="space-between">
              <ContentDetails
                username={post?.poster?.username}
                createdAt={post?.createdAt}
                edited={post?.edited}
                preview={preview === "secondary"}
              />
              <Box>
                {user &&
                  (isAuthor || user.isAdmin) &&
                  preview !== "secondary" && (
                    <HorizontalStack>
                      <div>
                        <IconButton
                          disabled={loading}
                          size="small"
                          onClick={handleMenuClick}
                        >
                          <BsThreeDots />
                        </IconButton>
                        <Menu
                          anchorEl={anchorEl}
                          open={Boolean(anchorEl)}
                          onClose={handleMenuClose}
                        >
                          <MenuItem onClick={handleEditPost}>
                            {editing ? (
                              <MdCancel color={iconColor.main} />
                            ) : (
                              <AiFillEdit color={iconColor.main} />
                            )}
                            Edit
                          </MenuItem>
                          {/* <IconButton
                        disabled={loading}
                        size="small"
                        
                      >
                      
                      </IconButton> */}

                          <MenuItem onClick={handleDeletePost}>
                            {confirm ? (
                              <AiFillCheckCircle color={errorColor.main} />
                            ) : (
                              <BiTrash color={errorColor.main} />
                            )}
                            Delete
                          </MenuItem>
                        </Menu>
                        {/* <IconButton
                        disabled={loading}
                        size="small"
                       
                      >
                       
                      </IconButton> */}
                      </div>
                    </HorizontalStack>
                  )}
              </Box>
            </HorizontalStack>

            <Typography
              variant="h5"
              gutterBottom
              sx={{ overflow: "hidden", mt: 1, maxHeight: 125 }}
              className="title"
            >
              {post?.title}
            </Typography>

            {preview !== "secondary" &&
              (editing ? (
                <ContentUpdateEditor
                  handleSubmit={handleSubmit}
                  originalContent={post?.content}
                />
              ) : (
                <Box
                  maxHeight={maxHeight}
                  overflow="hidden"
                  className="content"
                >
                  <Markdown content={post?.content} />
                </Box>
              ))}

            <HorizontalStack sx={{ mt: 2 }} justifyContent="space-between">
              <HorizontalStack>
                <AiFillMessage />
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  sx={{ fontWeight: "bold" }}
                >
                  {post?.commentCount}
                </Typography>
              </HorizontalStack>
              <Box>
                <UserLikePreview
                  postId={post?._id}
                  userLikePreview={post?.userLikePreview}
                />
              </Box>
            </HorizontalStack>
          </PostContentBox>
        </HorizontalStack>
      </Box>
    </Card>
  );
};

export default PostCard;

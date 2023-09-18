import { Card, Link, Stack, TextField, Typography } from "@mui/material";
import Button from "../Button";
import "../../css/createblog.css";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../api/posts";
import ErrorAlert from "../Extras/ErrorAlert";
import { isLoggedIn } from "../../helpers/authHelper";
import HorizontalStack from "../util/HorizontalStack";
import UserAvatar from "../UserModal/UserAvatar";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg";
const PostEditor = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const [serverError, setServerError] = useState("");
  const [errors, setErrors] = useState({});
  const user = isLoggedIn();

  const handleEditorChange = (editorState) => {
    setEditorState(editorState);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    const errors = validate();
    setErrors(errors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    // const contentRaw = JSON.stringify(
    //   convertToRaw(editorState.getCurrentContent())
    // );
    const contentState = editorState.getCurrentContent();
    const plainText = contentState.getPlainText();

    const data = await createPost(
      {
        title: formData.title,
        content: plainText,
      },
      isLoggedIn()
    );
    setLoading(false);
    if (data && data.error) {
      setServerError(data.error);
    } else {
      navigate("/blog/" + data._id);
    }
  };

  const validate = () => {
    const errors = {};

    return errors;
  };

  return (
    <div className="blog-portal-wrapper">
      <Card>
        <div className="blog-portal">
          {user && (
            <HorizontalStack spacing={2}>
              <UserAvatar width={50} height={50} username={user.username} />
              <h2 className="blog-portal-head">
                What's in your mind {user.username}?
              </h2>
            </HorizontalStack>
          )}

          <Typography>
            <a href="https://commonmark.org/help/" target="_blank">
              Markdown Help
            </a>
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Title"
              required
              name="title"
              margin="normal"
              onChange={handleChange}
              error={errors.title !== undefined}
              helperText={errors.title}
            />

            {/* <TextField
              fullWidth
              label="Content"
              multiline
              rows={10}
              name="content"
              margin="normal"
              onChange={handleChange}
              error={errors.content !== undefined}
              helperText={errors.content}
              required
            /> */}
            <Editor
              editorState={editorState}
              onEditorStateChange={handleEditorChange}
              wrapperClassName="richWrapper"
              editorClassName="richEditor"
              toolbarClassName="richToolbar"
              placeholder="Write your blog here.."
            />
            <ErrorAlert error={serverError} />
            <Button
              variant="outlined"
              type="submit"
              fullWidth
              disabled={loading}
              sx={{
                mt: 2,
              }}
            >
              {loading ? <>Submitting</> : <>Submit</>}
            </Button>
          </Box>
        </div>
      </Card>
    </div>
  );
};

export default PostEditor;

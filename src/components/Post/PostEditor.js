import React, { useState } from "react";
import { Card, Input, Button, Typography } from "antd";
import { createPost } from "../../api/posts";
import ErrorAlert from "../Extras/ErrorAlert";
import { isLoggedIn } from "../../helpers/authHelper";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, ContentState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../css/createblog.css";
import { useNavigate } from "react-router-dom";
import HorizontalStack from "../util/HorizontalStack";
import UserAvatar from "../UserModal/UserAvatar";
import SearchBooks from "../Extras/SearchFilter";

const PostEditor = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookSelect = (book) => {
    setSelectedBook(book);
  };
  const [serverError, setServerError] = useState("");
  const user = isLoggedIn();

  const handleEditorChange = (editorState) => {
    setEditorState(editorState);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

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

  return (
    <div className="blog-portal-wrapper">
      <Card>
        <div className="blog-portal">
          {user && (
            <HorizontalStack spacing={2}>
              <UserAvatar width={50} height={50} username={user.username} />
              <div style={{ display: "flex", alignItems: "center" }}>
                <h2 className="blog-portal-head">
                  What's in your mind {user.username}?
                </h2>
              </div>
            </HorizontalStack>
          )}

          <Typography>
            <a href="https://commonmark.org/help/" target="_blank">
              Markdown Help
            </a>
          </Typography>

          {/* <SearchBooks onBookSelect={handleBookSelect} /> */}

          <form onSubmit={handleSubmit}>
            <Input
              placeholder="Title"
              name="title"
              onChange={handleChange}
              value={formData.title}
              style={{ width: "100%", marginBottom: "1rem" }}
            />

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
              type="primary"
              htmlType="submit"
              loading={loading}
              style={{ marginTop: "1rem", width: "100%" }}
            >
              {loading ? "Submitting" : "Submit"}
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default PostEditor;

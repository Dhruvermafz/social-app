import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const PostContentBox = ({ clickable, post, editing, children }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleClick = () => {
    if (clickable && !editing) {
      navigate(`/posts/${post._id}`);
    }
  };

  return (
    <Box
      sx={{
        padding: theme.spacing(2),
        width: clickable && !editing ? "92%" : "90%",
        ...(clickable &&
          !editing && {
            "&:hover": {
              backgroundColor: "grey.50",
              cursor: "pointer",
            },
          }),
      }}
      onClick={handleClick}
    >
      {children}
    </Box>
  );
};

export default PostContentBox;

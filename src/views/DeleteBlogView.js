import React from "react";
import { Modal } from "antd";
import { deletePost } from "../api/posts";
import { store } from "../store";

const DeleteBlogView = (pk, title, callback) => {
  return Modal.confirm({
    title: `Delete '${title}'`,
    content: `Are you really wannt to delete this blog '${title}'. This action cannot be reversed.`,
    centered: true,
    okText: `Delete`,
    okButtonProps: {
      type: "danger",
      size: "large",
      loading: store.getState().common.dltBlogPk === pk,
    },
    cancelButtonProps: {
      size: "large",
    },
    onOk: () => store.dispatch(deletePost(pk, callback)),
  });
};

export default DeleteBlogView;

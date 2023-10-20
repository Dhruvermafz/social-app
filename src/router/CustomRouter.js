import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Error404 from "../components/Results/404";

const generatePage = (pageName) => {
  const component = () => require(`../views/${pageName}View`).default;

  try {
    return React.createElement(component());
  } catch (err) {
    return <Error404 />;
  }
};

const PageRender = () => {
  const { page, id } = useParams();
  const { auth } = useSelector((state) => state);

  let pageName = "";
  if (auth.token) {
    if (id) {
      pageName = `${page}/[id]`;
    } else {
      pageName = `${page}`;
    }
  }

  return generatePage(pageName);
};

export default PageRender;

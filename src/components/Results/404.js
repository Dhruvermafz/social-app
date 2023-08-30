import React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";
import Navbar from "../Home/Navbar";

const Error404 = () => {
  return (
    <>
      <Navbar />

      <Result
        status="404"
        title="404"
        subTitle={
          <p>
            Either the page doesn't exist or you have found bug {""}
            <a
              href="https://github.com/Dhruvermafz/itsablog-FRONTEND/issues"
              rel="noopener noreferrer"
              target="_blank"
            >
              Report Now!
            </a>
            .
          </p>
        }
        extra={
          <Link to="/">
            <Button type="primary">Back to Feed</Button>
          </Link>
        }
      />
    </>
  );
};

export default Error404;

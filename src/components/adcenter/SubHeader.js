import React from "react";
import baner from "../../static/img/resources/baner-forum.png";
const SubHeader = () => {
  return (
    <section>
      <div class="page-header">
        <div class="header-inner">
          <h2>Choose Your Ad Plan</h2>
          <p>
            Welcome to ItsABlog. This page is for the community where
            advertisers can swing and roll their products on.
          </p>
        </div>
        <figure>
          <img src={baner} alt="" />
        </figure>
      </div>
    </section>
  );
};

export default SubHeader;

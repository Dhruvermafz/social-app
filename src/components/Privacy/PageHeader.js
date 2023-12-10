import React from "react";
import privacy from "../../static/img/resources/baner-badges.png";
import "../../css/paheheader.css";
const PageHeader = () => {
  return (
    <section>
      <div class="page-header">
        <div class="header-inner">
          <h2>Privacy & Policy</h2>
          <p>
            Here you’ll find all the Privacy, Policies, & user agreements etc.
            you can read and save to your computer.
          </p>
        </div>
        <figure>
          <img src={privacy} alt="" />
        </figure>
      </div>
    </section>
  );
};

export default PageHeader;

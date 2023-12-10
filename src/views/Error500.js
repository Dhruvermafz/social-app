import React from "react";
import logo from "../static/img/icon.png";
import gif from "../static/img/resources/error500.gif";
import "../css/error500.css";
const Error500 = () => {
  return (
    <div className="www-layout">
      <section>
        <div className="gap no-gap ">
          <div className="eror eror500">
            <div className="container">
              <div className="row">
                <div className="col-lg-2 col-md-3 col-sm-3">
                  <div className="big-font">
                    <span>500</span>
                  </div>
                </div>
                <div className="col-lg-10 col-md-9 col-sm-9">
                  <div className="error-page500">
                    <div className="error-meta">
                      <a href="#" title="">
                        <img src={logo} alt="" />
                      </a>
                      <h1>Unexpeted Internal Server Error 500</h1>
                      <p>
                        the server has been deserted for a while please be
                        patient or try again later.
                      </p>
                      <img src={gif} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error500;

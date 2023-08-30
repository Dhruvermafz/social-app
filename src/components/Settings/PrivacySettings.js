import React from "react";
import "./index.css";
import { connect } from "react-redux";

const PrivacySettings = () => {
  return (
    <div>
      <h2 className="sett-head">Privacy Settings</h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { settings: state.settings };
};

export default connect(mapStateToProps, {})(PrivacySettings);

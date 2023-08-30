import React from "react";
import "./index.css";
import { connect } from "react-redux";

const AccountSettings = () => {
  return (
    <div>
      <h2 className="sett-head">Account Settings</h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { settings: state.settings };
};

export default connect(mapStateToProps, {})(AccountSettings);

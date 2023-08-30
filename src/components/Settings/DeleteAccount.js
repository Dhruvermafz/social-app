import React from "react";
import "./index.css";
import { connect } from "react-redux";

const DeleteAccount = () => {
  return (
    <div>
      <h2 className="sett-head">Delete Account</h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { settings: state.settings };
};

export default connect(mapStateToProps, {})(DeleteAccount);

import React from "react";
import "./index.css";
import { connect } from "react-redux";

const DeactivateAccount = () => {
  return (
    <div>
      <h2 className="sett-head">Deactivate Account</h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { settings: state.settings };
};

export default connect(mapStateToProps, {})(DeactivateAccount);

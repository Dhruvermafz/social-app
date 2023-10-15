import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./Spinner";
import { BASE_URL } from "../../config";

export default class Confirm extends Component {
  state = {
    confirming: true,
  };

  componentDidMount = () => {
    const { id } = this.props.match.params;

    fetch(`/email/confirm/${id}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ confirming: false });
        toast(data.msg);
      })
      .catch((err) => console.log(err));
  };

  render = () => (
    <div className="confirm">
      <ToastContainer />
      {this.state.confirming ? (
        <Spinner size="8x" spinning={"spinning"} />
      ) : (
        <Link to="/">
          <Spinner size="8x" spinning={""} />
        </Link>
      )}
    </div>
  );
}

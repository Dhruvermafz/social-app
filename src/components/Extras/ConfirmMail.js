import React, { Component } from "react";
import { Link } from "react-router-dom";
import { notify } from "react-notify-toast";
import Spinner from "./Spinner";
import { BASE_URL } from "../../config";

export default class Confirm extends Component {
  state = {
    confirming: true,
  };

  componentDidMount = () => {
    const { id } = this.props.match.params;

    fetch(`${BASE_URL}/email/confirm/${id}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ confirming: false });
        notify.show(data.msg);
      })
      .catch((err) => console.log(err));
  };

  render = () => (
    <div className="confirm">
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

import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams, NavLink } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import { Input, Button, message } from "antd";
import { Space } from "antd";
import Loading from "../components/Home/Loading";

const ForgotPassword = () => {
  const { id, token } = useParams();
  const history = useNavigate();
  const [data2, setData] = useState(false);
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const userValid = async () => {
    const res = await fetch(`/forgotpassword/${id}/${token}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (data.status === 201) {
      console.log("user valid");
    } else {
      history("*");
    }
  };

  const setval = (e) => {
    setPassword(e.target.value);
  };

  const sendpassword = async (e) => {
    e.preventDefault();

    if (password === "") {
      message.error("Password is required!");
    } else if (password.length < 6) {
      message.error("Password must be at least 6 characters.");
    } else {
      const res = await fetch(`/${id}/${token}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (data.status === 201) {
        setPassword("");
        setMessage(true);
      } else {
        message.error("Token Expired, generate a new link");
      }
    }
  };

  useEffect(() => {
    userValid();
    setTimeout(() => {
      setData(true);
    }, 3000);
  }, []);

  return (
    <>
      {/* <Result
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
      /> */}

      {data2 ? (
        <section>
          <div className="form_data">
            <div className="form_heading">
              <h1>Enter Your NEW Password</h1>
            </div>
            <form>
              {message ? (
                <p style={{ color: "green", fontWeight: "bold" }}>
                  Password Successfully Updated
                </p>
              ) : null}
              <div className="form_input">
                <label htmlFor="password">New password</label>
                <Input.Password
                  value={password}
                  onChange={setval}
                  name="password"
                  id="password"
                  placeholder="Enter Your new password"
                />
              </div>
              <Button type="primary" onClick={sendpassword}>
                Send
              </Button>
            </form>
            <p>
              <NavLink to="/">Home</NavLink>
            </p>
            <ToastContainer />
          </div>
        </section>
      ) : (
        <Space
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          Loading... &nbsp;
          <Loading />
        </Space>
      )}
    </>
  );
};

export default ForgotPassword;

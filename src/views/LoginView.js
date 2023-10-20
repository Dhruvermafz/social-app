import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/users";
import { Input, Button, TextField } from "@mui/material";
import { PersonOutline, LockOutlined } from "@mui/icons-material";
import ErrorAlert from "../components/Extras/ErrorAlert";
import { loginUser } from "../helpers/authHelper";
import Copyright from "../components/Home/Footer";
import Banner from "../components/Banner";
import { icon } from "../static";
import Layout from "../components/Layout/Layout";
import TransitionOptions from "../components/util/TransitionOptions";

const LoginView = () => {
  const [allowTrial] = useState(true);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [serverError, setServerError] = useState("");
  const [transitonOption, setTransitionOption] = useState("none");

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await login(formData);
    if (data.error) {
      setServerError(data.error);
      setTransitionOption("failure");
    } else {
      loginUser(data);
      navigate("/");
      setTransitionOption("success");
    }
  };

  return (
    <>
<<<<<<< HEAD
      <Banner />
      <Layout>
        <div className="portal-login">
          <TransitionOptions setTransitionOption={setTransitionOption} />

          {allowTrial && (
            <div className="portal-notif">
              <h3>Trial Use</h3>
              <ul>
                <li>
                  <span>Email </span>: &nbsp; <span>trial@trial.com</span>
                </li>
                <li>
                  <span>Password </span>: &nbsp; <span>trial123</span>
                </li>
              </ul>
            </div>
          )}
          <div className="portal">
            <h2 className="portal-head">Login</h2>
=======
      <div className="login-container">
        <Banner />
        <Layout>
          <div className="portal-login">
            {allowTrial && (
              <div className="portal-notif">
                <h3>Trial Use</h3>
                <ul>
                  <li>
                    <span>Email </span>: &nbsp; <span>trial@trial.com</span>
                  </li>
                  <li>
                    <span>Password </span>: &nbsp; <span>trial123</span>
                  </li>
                </ul>
              </div>
            )}
            <div className="portal">
              <h2 className="portal-head">Login</h2>
>>>>>>> 38706b6f752dce243175d032087f4f52d58b4cfb

              <form onSubmit={handleSubmit}>
                <TextField
                  label="Email Address"
                  name="email"
                  variant="outlined"
                  fullWidth
                  size="small"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  type="email"
                  margin="normal"
                />
                <TextField
                  label="Password"
                  name="password"
                  variant="outlined"
                  fullWidth
                  size="small"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  type="password"
                  margin="normal"
                />
                <ErrorAlert error={serverError} />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="portal-submit"
                >
                  Login
                </Button>
              </form>
              <Link to="/signup" className="portal-link">
                Create an account?
              </Link>
            </div>
          </div>
        </Layout>
        {/* <Copyright /> */}
      </div>
    </>
  );
};

export default LoginView;

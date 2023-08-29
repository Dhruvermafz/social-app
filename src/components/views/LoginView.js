import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api/users";
import { Input, Button, Form } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import ErrorAlert from "../Extras/ErrorAlert";
import { loginUser } from "../../helpers/authHelper";
import Copyright from "../Extras/Copyright";
import Banner from "../Banner";
import { icon } from "../../static";
import Layout from "../Layout/Layout";

const LoginView = () => {
  const [allowTrial] = useState(true);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await login(formData);
    if (data.error) {
      setServerError(data.error);
    } else {
      loginUser(data);
      navigate("/");
    }
  };

  return (
    <Layout>
      <Banner />
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

          <Form onFinish={handleSubmit} layout="vertical">
            <Form.Item
              label="Email Address"
              name="email"
              rules={[
                { required: true, message: "Please enter your email address" },
                {
                  type: "email",
                  message: "Please enter a valid email address",
                },
              ]}
            >
              <Input
                size="large"
                prefix={<UserOutlined />}
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please enter your password" },
              ]}
            >
              <Input.Password
                size="large"
                prefix={<LockOutlined />}
                value={formData.password}
                onChange={handleChange}
              />
            </Form.Item>
            <ErrorAlert error={serverError} />
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="portal-submit"
                size="large"
              >
                Login
              </Button>
            </Form.Item>
          </Form>
          <Link to="/signup" className="portal-link">
            Create an account?
          </Link>
        </div>
      </div>
      <Copyright />
    </Layout>
  );
};

export default LoginView;

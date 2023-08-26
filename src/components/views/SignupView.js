import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signup } from "../../api/users";
import { loginUser } from "../../helpers/authHelper";
import { isLength, isEmail, contains } from "validator";
import { Typography, Input, Button, Form, Alert } from "antd";
import Layout from "../Layout/Layout";
import Copyright from "../Extras/Copyright";
import "../css/signup.css";
const { Content } = Layout;

const SignupView = () => {
  const history = useNavigate();
  const [allowTrial] = useState(true);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      try {
        setLoading(true);
        const data = await signup(formData);
        setLoading(false);

        if (data.error) {
          setServerError(data.error);
        } else {
          loginUser(data);
          history("/");
        }
      } catch (error) {
        setServerError("An error occurred. Please try again.");
      }
    }
  };

  const validate = () => {
    const validationErrors = {};

    if (!isLength(formData.username, { min: 6, max: 30 })) {
      validationErrors.username = "Must be between 6 and 30 characters long";
    }

    if (contains(formData.username, " ")) {
      validationErrors.username = "Must contain only valid characters";
    }

    if (!isLength(formData.password, { min: 8 })) {
      validationErrors.password = "Must be at least 8 characters long";
    }

    if (!isEmail(formData.email)) {
      validationErrors.email = "Must be a valid email address";
    }

    setErrors(validationErrors);
    return validationErrors;
  };

  return (
    <Layout className="Auth-right-signup">
      <Typography.Title level={2} style={{ marginBottom: 24 }}>
        <Typography.Link
          to="/"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          ItsABlog
        </Typography.Link>
      </Typography.Title>
      <div className="portal portal-signup">
        <h2 className="portal-head">Sign Up</h2>
        {allowTrial && (
          <div className="portal-notif">
            <span>Trial Login available at Login Portal</span>
          </div>
        )}
        <Link to="/login" className="portal-link">
          Already have an account?{" "}
        </Link>
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label="Username"
            name="username"
            validateStatus={errors.username ? "error" : ""}
            help={errors.username}
            rules={[{ required: true }]}
          >
            <Input
              size="large"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item
            label="Email Address"
            name="email"
            validateStatus={errors.email ? "error" : ""}
            help={errors.email}
            rules={[{ required: true }]}
          >
            <Input value={formData.email} onChange={handleChange} />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            validateStatus={errors.password ? "error" : ""}
            help={errors.password}
            rules={[{ required: true }]}
          >
            <Input.Password value={formData.password} onChange={handleChange} />
          </Form.Item>
          {serverError && <Alert type="error" message={serverError} />}
          <Form.Item>
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              loading={loading}
              className="portal-submit"
            >
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </div>

      <Copyright />
    </Layout>
  );
};

export default SignupView;

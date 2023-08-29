import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signup } from "../../api/users";
import { loginUser } from "../../helpers/authHelper";
import { isLength, isEmail, contains } from "validator";
import {
  Typography,
  TextField,
  Button,
  Alert,
  Container,
  Paper,
  Box,
  Grid,
  Link as MUILink,
} from "@mui/material";
import Layout from "../Layout/Layout";
import Banner from "../Banner";
import "../css/signup.css";

const SignupView = () => {
  const navigate = useNavigate();
  const [allowTrial] = useState(true);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", // Clear error on input change
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length !== 0) return;

    const data = await signup(formData);

    if (data.error) {
      setServerError(data.error);
    } else {
      loginUser(data);
      navigate("/");
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
      <Banner />
      {allowTrial && (
        <div className="portal-notif">
          <span>Trial Login available at Login Portal</span>
        </div>
      )}

      <Container maxWidth="sm">
        <Paper elevation={3} className="portal portal-signup">
          <Typography variant="h4" component="h2" className="portal-head">
            Sign Up
          </Typography>

          <MUILink component={Link} to="/login" className="portal-link">
            Already have an account?
          </MUILink>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Username"
                  name="username"
                  fullWidth
                  variant="outlined"
                  size="small"
                  error={Boolean(errors.username)}
                  helperText={errors.username}
                  value={formData.username}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email Address"
                  name="email"
                  fullWidth
                  variant="outlined"
                  size="small"
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  name="password"
                  fullWidth
                  variant="outlined"
                  size="small"
                  type="password"
                  error={Boolean(errors.password)}
                  helperText={errors.password}
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>
            {serverError && (
              <Alert severity="error" className="portal-error">
                {serverError}
              </Alert>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              disabled={loading}
              className="portal-submit"
            >
              Sign Up
            </Button>
          </form>
        </Paper>
      </Container>
    </Layout>
  );
};

export default SignupView;

import React from "react";
import { List, Typography, Layout } from "antd";
import { Link, useNavigate } from "react-router-dom";
import {
  ProfileFilled,
  GithubOutlined,
  InfoCircleOutlined,
  SettingOutlined,
  LockOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { routes } from "../../router/routes";
import { isLoggedIn, logoutUser } from "../../helpers/authHelper";

const { Item } = List;

const NavLinks = ({ darkmode }) => {
  const user = isLoggedIn();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    logoutUser();
    navigate("/login");
  };

  return (
    <Layout
      style={{
        backgroundColor: darkmode ? "#1A1B1E" : "white",
        borderRadius: "4px",
        padding: "1rem",
        color: darkmode ? "#c1c2c5" : "black",
      }}
    >
      <List grid={{ gutter: 16, xs: 1, sm: 2, md: 4 }}>
        <Item>
          <Link to={`${routes.PROFILE(user.username)}`}>
            <ProfileFilled style={{ fontSize: "24px" }} />
            <Typography.Paragraph style={{ fontSize: "16px" }}>
              Profile
            </Typography.Paragraph>
          </Link>
        </Item>
        <Item>
          <Link to="https://github.com/Dhruvermafz/social-app" target="_blank">
            <GithubOutlined style={{ fontSize: "24px" }} />
            <Typography.Paragraph style={{ fontSize: "16px" }}>
              GitHub
            </Typography.Paragraph>
          </Link>
        </Item>
        <Item>
          <Link to="/about">
            <InfoCircleOutlined style={{ fontSize: "24px" }} />
            <Typography.Paragraph style={{ fontSize: "16px" }}>
              About
            </Typography.Paragraph>
          </Link>
        </Item>
        <Item>
          <Link to="/settings">
            <SettingOutlined style={{ fontSize: "24px" }} />
            <Typography.Paragraph style={{ fontSize: "16px" }}>
              Settings
            </Typography.Paragraph>
          </Link>
        </Item>
        <Item>
          <Link to="https://discord.gg/n32dAAcCJY" target="_blank">
            <LockOutlined style={{ fontSize: "24px" }} />
            <Typography.Paragraph style={{ fontSize: "16px" }}>
              Discord
            </Typography.Paragraph>
          </Link>
        </Item>
        <Item>
          <a href="#" onClick={handleLogout}>
            <LogoutOutlined style={{ fontSize: "24px" }} />
            <Typography.Paragraph style={{ fontSize: "16px" }}>
              Logout
            </Typography.Paragraph>
          </a>
        </Item>
      </List>
    </Layout>
  );
};

export default NavLinks;

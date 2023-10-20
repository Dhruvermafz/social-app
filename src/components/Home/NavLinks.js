import React from "react";
import { Layout, Typography, List } from "antd";
import {
  GithubOutlined,
  InfoCircleOutlined,
  SettingOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Item } = List;

const NavLinks = ({ darkmode }) => {
  const links = [
    {
      icon: <GithubOutlined style={{ fontSize: "24px" }} />,
      text: "GitHub",
      url: "https://github.com/Dhruvermafz/social-app",
    },
    {
      icon: <InfoCircleOutlined style={{ fontSize: "24px" }} />,
      text: "About",
      url: "/about",
    },
    {
      icon: <SettingOutlined style={{ fontSize: "24px" }} />,
      text: "Settings",
      url: "/settings",
    },
    {
      icon: <LockOutlined style={{ fontSize: "24px" }} />,
      text: "Discord",
      url: "https://discord.gg/n32dAAcCJY",
    },
  ];

  return (
    <Layout
      style={{
        backgroundColor: darkmode ? "#1A1B1E" : "white",
        borderRadius: "4px",
        padding: "1rem",
        color: darkmode ? "#c1c2c5" : "black",
      }}
    >
      <List
        // grid={{ gutter: 16, xs: 1, sm: 2, md: 4 }}
        dataSource={links}
        renderItem={(item) => (
          <Item>
            <Link
              to={item.url}
              target={item.url.startsWith("http") ? "_blank" : "_self"}
            >
              {item.icon}
              <Typography.Paragraph style={{ fontSize: "16px" }}>
                {item.text}
              </Typography.Paragraph>
            </Link>
          </Item>
        )}
      />
    </Layout>
  );
};

export default NavLinks;

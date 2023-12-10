import React, { useEffect, useState } from "react";
import { Card, Space, Typography, Avatar, Button } from "antd";
import { ReloadOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { getRandomUsers } from "../../api/users";
import Loading from "../Home/Loading";
import UserEntry from "../UserModal/UserEntry";

const { Text } = Typography;

const FindUsers = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);
    const data = await getRandomUsers({ size: 5 });
    setLoading(false);
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleClick = () => {
    fetchUsers();
  };

  return (
    <div className="widget">
      <Card title="Find Others" className="widget-title">
        <Space direction="vertical" style={{ width: "100%" }} size="middle">
          {/* <Space align="center">
          <UserOutlined />
        
        </Space> */}

          <hr />
          {loading ? (
            <Loading />
          ) : (
            users &&
            users.map((user) => (
              <Link to={`/${user.username}`} key={user.username}>
                <Space align="center">
                  {/* <Avatar size={24} src={user.avatar} />
                <Text strong>{user.username}</Text> */}
                  <UserEntry username={user.username} key={user.username} />
                </Space>
              </Link>
            ))
          )}
        </Space>
      </Card>
    </div>
  );
};

export default FindUsers;

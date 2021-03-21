import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeTwoTone,
  UserOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

export default function Layouting({ children, search, style }) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleMenu = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ height: "100vh", width: "100vw" }}>
      <Sider collapsible collapsed={collapsed}>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item
            key="1"
            icon={
              <Link to="/">
                <HomeTwoTone
                  style={{
                    fontSize: "2.5rem",
                  }}
                />
              </Link>
            }
            style={{
              height: "8vh",
              display: "flex",
              flex: 1,
              paddingLeft: "1vw",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1rem",
            }}
          >
            Home
          </Menu.Item>

          <Menu.Item
            key="2"
            icon={
              <UserOutlined
                style={{
                  fontSize: "2.5rem",
                }}
              />
            }
            style={{
              height: "8vh",
              display: "flex",
              flex: 1,
              paddingLeft: "1vw",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1rem",
            }}
          >
            Profile
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            display: "flex",
            flex: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingRight: "2vw",
            paddingLeft: "2vw",
            color: "white",
            fontSize: "1.5rem",
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggleMenu,
            }
          )}
          {search}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "1.5rem 1rem",
            paddingLeft: "1vw",
            paddingRight: "1vw",
            paddingBottom: "1vh",
            paddingTop: "1vh",
            minHeight: 280,
            overflowY: "scroll",
            ...style,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}

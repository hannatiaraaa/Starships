import React, { useEffect, useState } from "react";
import "./style.css";
import { Card, Col, Image, Layout, Menu, Row } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeTwoTone,
  UserOutlined,
} from "@ant-design/icons";
import starshipsImage from "../../assets/images/starships.png";

// redux
import { connect } from "react-redux";
import { getStarships } from "./redux/action";

const { Header, Sider, Content } = Layout;
function Home(props) {
  const { starships } = props;
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    props.getStarships();
  }, []);

  const toggleMenu = () => {
    setCollapsed(!collapsed);
  };

  const RenderContentData = ({ title, content }) => {
    return (
      <Content>
        <p className="content title">{title}</p>
        <h2 className="content data">{content}</h2>
      </Content>
    );
  };

  const RenderCard = () => {
    const renderItem = starships.map((item) => {
      return (
        <Card
          className="card"
          style={{
            width: "60vw",
            marginBottom: "2vh",
            marginTop: "2vh",
          }}
        >
          <Row gutter={[24, 40]}>
            <Col span={12}>
              <RenderContentData title="Name" content={item.name} />
              <RenderContentData title="Length" content={item.length} />
            </Col>
            <Col span={12}>
              <RenderContentData
                title="Starship Class"
                content={item.starship_class}
              />

              <RenderContentData
                title="Maximum Atmosphering Speed"
                content={item.max_atmosphering_speed}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <RenderContentData title="Model" content={item.model} />
            </Col>
          </Row>
        </Card>
      );
    });
    return renderItem;
  };

  return (
    <Layout style={{ height: "100vh", width: "100vw" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item
            key="1"
            icon={
              <HomeTwoTone
                style={{
                  fontSize: "32px",
                }}
              />
            }
            style={{
              height: "8vh",
              display: "flex",
              flex: 1,
              padding: 0,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Home
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={
              <UserOutlined
                style={{
                  fontSize: "32px",
                }}
              />
            }
            style={{
              height: "8vh",
              display: "flex",
              flex: 1,
              padding: 0,
              justifyContent: "center",
              alignItems: "center",
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
            paddingRight: "2vw",
            paddingLeft: "2vw",
            color: "white",
            fontSize: "20px",
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggleMenu,
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            display: "flex",
            flex: "row",
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            overflowY: "scroll",
          }}
        >
          <Content>
            <RenderCard />
          </Content>

          <Image
            width="28vw"
            src={starshipsImage}
            placeholder={
              <Image preview={false} width="28vw" src={starshipsImage} />
            }
          />
        </Content>
      </Layout>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  starships: state.HomeReducer.starships,
});

const mapDispatchToProps = {
  getStarships,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

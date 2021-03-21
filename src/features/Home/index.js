import React, { useEffect, useState } from "react";
import "./style.css";
import { Card, Col, Image, Layout, Menu, Row, Input } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeTwoTone,
  UserOutlined,
} from "@ant-design/icons";
import starshipsImage from "../../assets/images/starships.png";
import history from "../../routes/history";

// redux
import { connect } from "react-redux";
import { getStarships, getSearch } from "./redux/action";
import Loader from "../../components/Loader";

const { Header, Sider, Content } = Layout;
const { Search } = Input;

function Home(props) {
  const { starships, prevPage, nextPage } = props;
  const [collapsed, setCollapsed] = useState(true);
  const [dataStarship, setDataStarship] = useState([]);
  const [search, setSearch] = useState("");
  const [next, setNext] = useState("");

  useEffect(() => {
    if (search.length === 0) {
      manipuateData();
    }
  }, [search]);

  useEffect(() => {
    const check = window.addEventListener(
      "scroll",
      (e) => {
        console.log(e.currentTarget, "useEfect 2");
      },
      true
    );
  }, []);
  console.log(window);

  const manipuateData = async () => {
    props.getStarships();
  };

  const toggleMenu = () => {
    setCollapsed(!collapsed);
  };

  const onChange = (e) => {
    props.getSearch(e.target.value);
    setSearch(e.target.value);
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
    const renderItem = starships.map((item, index) => {
      return (
        <Card
          key={index.toString()}
          onClick={() => history.push("/details")}
          className="card"
          style={{
            width: "60vw",
            marginBottom: "2vh",
            marginTop: "2vh",
          }}
          id={index + 1}
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

    if (dataStarship.length < 0) return <Loader />;
    else return renderItem;
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
          <Search
            placeholder="Search name or model"
            style={{ width: "40vw" }}
            onChange={onChange}
            enterButton
          />
        </Header>
        <Content
          className="site-layout-background"
          style={{
            display: "flex",
            flex: "row",
            margin: "1.5rem 1rem",
            padding: "1.5rem",
            minHeight: 280,
            overflowY: "scroll",
          }}
        >
          <Content onScroll={(e) => console.log(e)}>
            <RenderCard />
          </Content>

          <Image
            width="28vw"
            style={{
              position: "absolute",
            }}
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
  prevPage: state.HomeReducer.prevPage,
  nextPage: state.HomeReducer.nextPage,
});

const mapDispatchToProps = {
  getStarships,
  getSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

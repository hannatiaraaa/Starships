import React, { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Card, Col, Layout, Row, Input } from "antd";

// component
import Layouting from "../../components/Layouting";
import Loader from "../../components/Loader";

// redux
import { connect } from "react-redux";
import { getStarships, getSearch, getStarshipsSearch } from "./redux/action";
import { getDetails } from "../Details/redux/action";

const { Content } = Layout;
const { Search } = Input;

function Home(props) {
  const { starships } = props;
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(2);

  useEffect(() => {
    if (search.length === 0) {
      props.getStarshipsSearch();
    }
  }, [search]);

  useEffect(() => {
    manipuateData();
  }, [page]);

  const manipuateData = async () => {
    window.addEventListener(
      "scroll",
      (e) => {
        const totalHeight = e.target.scrollHeight;
        const currentYPos = e.target.scrollTop;
        const startYPos = e.target.clientHeight;

        if (totalHeight === currentYPos + startYPos) {
          setPage(page + 1);
          props.getStarships();
          console.log(page);
        }
      },
      true
    );
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
        <Link to="/details">
          <Card
            onClick={() => props.getDetails(item.url)}
            key={index.toString()}
            className="card"
            style={{
              width: "60vw",
              marginBottom: "3vh",
              marginTop: "3vh",
              paddingRight: "1vw",
              paddingLeft: "1vw",
              color: "white",
              fontSize: "1.5rem",
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
        </Link>
      );
    });

    if (starships.length < 0) return <Loader />;
    else return renderItem;
  };

  return (
    <Layouting
      search={
        <Search
          placeholder="Search name or model"
          style={{ width: "40vw" }}
          onChange={onChange}
          enterButton
        />
      }
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Content onScroll={(e) => console.log(e)}>
        <RenderCard />
      </Content>
    </Layouting>
  );
}

const mapStateToProps = (state) => ({
  starships: state.HomeReducer.starships,
});

const mapDispatchToProps = {
  getStarships,
  getStarshipsSearch,
  getSearch,
  getDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

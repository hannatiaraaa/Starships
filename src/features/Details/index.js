import React from "react";
import "../../App.css";
import "../Home/style.css";
import starshipsImage from "../../assets/images/starships.png";
import { Image, Layout, Rate, Skeleton, Typography } from "antd";
import { formatNumber } from "accounting-js";

// component
import Layouting from "../../components/Layouting";

// redux
import { connect } from "react-redux";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

function Details(props) {
  const { details } = props;

  const RenderContentData = ({ title, content }) => {
    return (
      <Content style={{ paddingBottom: "2vh", paddingTop: "2vh" }}>
        <Paragraph
          className="title"
          style={{ color: "wheat", paddingLeft: "2vw", paddingRight: "2vw" }}
        >
          {title}
        </Paragraph>
        <Title
          className="data"
          level={2}
          style={{
            color: "#E6F7FF",
            marginTop: 0,
            textTransform: "capitalize",
            paddingLeft: "2vw",
            paddingRight: "2vw",
          }}
        >
          {content}
        </Title>
      </Content>
    );
  };

  if (!details) {
    return <Skeleton active />;
  } else {
    return (
      <Layouting
        style={{
          paddingTop: "2vh",
          paddingBottom: "2vh",
        }}
      >
        <Title
          style={{
            color: "#E6F7FF",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          {details.name}
        </Title>
        <Rate
          disabled
          allowHalf
          defaultValue={details.hyperdrive_rating}
          style={{
            fontSize: "2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
        <Content
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: "2vh",
            marginBottom: "2vh",
          }}
        >
          <Content
            style={{
              textAlign: "center",
            }}
          >
            <Image
              className="hide-small"
              src={starshipsImage}
              placeholder={<Image preview={false} src={starshipsImage} />}
            />
          </Content>
          <Content style={{ textAlign: "start" }}>
            <Content
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <RenderContentData title="Crew" content={details.crew} />
              <RenderContentData
                title="Passengers"
                content={details.passengers}
              />
            </Content>
            <RenderContentData
              title="Consumables"
              content={details.consumables}
            />
            <Content
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <RenderContentData
                title="Cargo Capacity"
                content={
                  details.cargo_capacity === "unknown"
                    ? details.cargo_capacity
                    : formatNumber(parseInt(details.cargo_capacity), {
                        precision: 0,
                      })
                }
              />
              <RenderContentData
                title="Cost in Credits"
                content={
                  details.cost_in_credits === "unknown"
                    ? details.cost_in_credits
                    : formatNumber(parseInt(details.cost_in_credits), {
                        precision: 0,
                      })
                }
              />
            </Content>
            <RenderContentData title="Model" content={details.model} />
            <RenderContentData
              title="Manufacturer"
              content={details.manufacturer}
            />
          </Content>
        </Content>
      </Layouting>
    );
  }
}

const mapStateToProps = (state) => ({
  details: state.DetailsReducer.details,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Details);

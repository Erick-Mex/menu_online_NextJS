import React from "react";
import { Layout } from "../components/Layout";
import { CardFood } from "../components/CardFood";
import { foodInfo } from "../components/FoodInfo";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Steaks = () => {
  return (
    <Layout>
      <hr className="hr" />
      <Container style={{ marginTop: "24px", marginBottom: "24px" }}>
        <Row xs={1} md={2} className="g-4">
          {foodInfo.map((food, index) => {
            if (food.category == "Steaks") {
              return (
                <Col key={index}>
                  <CardFood {...food} />
                </Col>
              );
            }
          })}
        </Row>
      </Container>
    </Layout>
  );
};

export default Steaks;

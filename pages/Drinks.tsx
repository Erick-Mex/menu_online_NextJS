import React from "react";
import { Layout } from "../components/Layout";
import { CardDrinks } from "../components/CardDrinks";
import { drinkInfo } from "../components/FoodInfo";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Dessert = () => {
  return (
    <Layout>
      <hr className="hr" />
      <Container style={{ marginTop: "24px", marginBottom: "24px" }}>
        <Row xs={1} md={2} className="g-4">
          {drinkInfo.map((drink, index) => {
            return (
              <Col key={index}>
                <CardDrinks {...drink} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </Layout>
  );
};

export default Dessert;

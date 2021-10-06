import type { NextPage } from "next";
import { Category } from "../components/FoodInfo";
import { CardCategory } from "../components/CardCategory";
import { Layout } from "../components/Layout";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";


const Home: NextPage = () => {
  return (
    <Layout>
      <hr className="hr" />
      <Container style={{ marginTop: "24px", marginBottom: "24px" }}>
        <Row xs={1} md={2} className="g-4">
          {Category.map((element, index) => {
            return (
              <Col key={index}>
                <CardCategory {...element} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </Layout>
  );
};

export default Home;

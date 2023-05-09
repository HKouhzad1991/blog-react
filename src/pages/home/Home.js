import ArticleItem from "../../components/article/ArticleItem";
import MyNavbar from "../../components/navbar/MyNavbar";
import { Container, Col, Row } from "react-bootstrap";

function Home() {
  return (
    <>
      <MyNavbar />
      <Container>
        <h1 style={{ marginTop: "20px" }}>لیست مقالات</h1>
        <Row className="row-col-1 row-row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
          <Col>
            <ArticleItem />
          </Col>
          <Col>
            <ArticleItem />
          </Col>
          <Col>
            <ArticleItem />
          </Col>
          <Col>
            <ArticleItem />
          </Col>
          <Col>
            <ArticleItem />
          </Col>
          <Col>
            <ArticleItem />
          </Col>
          <Col>
            <ArticleItem />
          </Col>
          <Col>
            <ArticleItem />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;

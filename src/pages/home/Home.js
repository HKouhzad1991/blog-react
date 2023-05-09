import { useEffect, useState } from "react";
import ArticleItem from "../../components/article/ArticleItem";
import MyNavbar from "../../components/navbar/MyNavbar";
import { Container, Col, Row } from "react-bootstrap";
import axios from "axios";

function Home() {
  
const [articles, setArticles] = useState([]);

  useEffect(() => {
    

    axios
      .get("http://localhost:5000/articles")
      .then((response) => console.log(response.data));
  }, []);
  return (
    <>
      <MyNavbar />
      <Container>
        <h1 style={{ marginTop: "20px" }}>لیست مقالات</h1>
        <Row className="row-col-1 row-row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gy-4 py-3">
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

import MyNavbar from "../../components/navbar/MyNavbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./AddArticle.css";
import axios from "axios";

function AddArticle() {
  const addArticleHandler = () => {
    axios.post("http://localhost:5000/articles", {
      title: "عنوان مقاله دهم",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک",
      writter: "میلاد",
      category: "وب",
      image: "https://dl.next1code.ir/images/react/article8.webp",
      readingTime: 55,
    });
  };

  return (
    <>
      <MyNavbar />
      <div className="formContainer">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>عنوان مقاله</Form.Label>
            <Form.Control type="text" placeholder="عنوان مقاله را وارد کنید" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>توضیح کوتاه</Form.Label>
            <Form.Control
              type="text"
              placeholder="یه توضیح کوتاه در مورد مقاله وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>نویسنده مقاله</Form.Label>
            <Form.Control
              type="text"
              placeholder="نام نویسنده مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>موضوع مقاله</Form.Label>
            <Form.Control type="text" placeholder="موضوع مقاله را وارد کنید" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>عکس مقاله</Form.Label>
            <Form.Control type="text" placeholder="عکس مقاله را وارد کنید" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>مدت زمان خواندن</Form.Label>
            <Form.Control type="number" placeholder="" />
          </Form.Group>

          <Button onClick={addArticleHandler} variant="primary" type="button">
            ساخت مقاله
          </Button>
        </Form>
      </div>
    </>
  );
}

export default AddArticle;

import MyNavbar from "../../components/navbar/MyNavbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./AddArticle.css";

function AddArticle() {
  return (
    <>
      <MyNavbar />
      <div className="formContainer">
        <Form>
          <Form.Group className="mb-3" >
            <Form.Label>عنوان مقاله</Form.Label>
            <Form.Control type="text" placeholder="عنوان مقاله را وارد کنید" />
          
          </Form.Group>

          <Button variant="primary" type="button">
            ساخت مقاله
          </Button>
        </Form>
      </div>
    </>
  );
}

export default AddArticle;

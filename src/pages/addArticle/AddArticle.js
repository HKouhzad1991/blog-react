import MyNavbar from "../../components/navbar/MyNavbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './AddArticle.css'
import axios from "axios";
import { useState } from "react";


function AddArticle() {

    const [titleState , setTitleState] = useState('')
    const [descState , setDescState] = useState('')
    const [writterState , setWritterState] = useState('')
    const [categoryState , setCategoryState] = useState('')
    const [imageState , setImagetate] = useState('')
    const [readingTimeState , setReadingTimeState] = useState('')

    const addArticleHandler = () => {
        axios.post('http://localhost:5000/articles' , {
            title : titleState,
            desc : descState,
            writter : writterState,
            category : categoryState,
            image : imageState,
            readingTime : readingTimeState
        } )
    }

    const titleInputHanlder = (e) => {
        setTitleState(e.target.value)
    }
    const descInputHanlder = (e) => {
        setDescState(e.target.value)
    }
    const writterInputHanlder = (e) => {
        setWritterState(e.target.value)
    }
    const categoryInputHanlder = (e) => {
        setCategoryState(e.target.value)
    }
    const imageInputHanlder = (e) => {
        setImagetate(e.target.value)
    }
    const readingTimeInputHanlder = (e) => {
        setReadingTimeState(e.target.value)
    }

  return (
    <>
      <MyNavbar />
      <div className="formContainer">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>عنوان مقاله</Form.Label>
            <Form.Control onChange={titleInputHanlder} type="text" placeholder="عنوان مقاله را وارد کنید" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>توضیح کوتاه</Form.Label>
            <Form.Control onChange={descInputHanlder} type="text" placeholder="یه توضیح کوتاه در مورد مقاله وارد کنید" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>نویسنده مقاله</Form.Label>
            <Form.Control onChange={writterInputHanlder} type="text" placeholder="نام نویسنده مقاله را وارد کنید" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>موضوع مقاله</Form.Label>
            <Form.Control onChange={categoryInputHanlder} type="text" placeholder="موضوع مقاله را وارد کنید" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>عکس مقاله</Form.Label>
            <Form.Control onChange={imageInputHanlder} type="text" placeholder="عکس مقاله را وارد کنید" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>مدت زمان خواندن</Form.Label>
            <Form.Control onChange={readingTimeInputHanlder} type="number" placeholder="" />
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

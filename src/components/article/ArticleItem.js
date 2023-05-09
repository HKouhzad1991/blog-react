import Card from "react-bootstrap/Card";
import { BiTimeFive } from "react-icons/bi";
import { TiArrowLeftThick } from "react-icons/ti";
import './ArticleItem.css'
function ArticleItems() {
  return (
    <Card >
      <Card.Img
        variant="top"
        src="http://dl.next1code.ir/images/react/article1.webp"
      />
      <Card.Body>
        <Card.Title className="py-2">عنوان مقاله اول</Card.Title>
        <Card.Text>
          شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
          کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده
          شناخت فراوان جامعه و متخصصان را می طلبد
        </Card.Text>
        <span className="read-more">
          <span>ادامه مقاله </span>
          <TiArrowLeftThick size='25px' />
        </span>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center py-3">
        <span>نویسنده : حسین کوهزاد</span>
        <span>
          <BiTimeFive /> 5 دقیقه
        </span>
      </Card.Footer>
    </Card>
  );
}

export default ArticleItems;

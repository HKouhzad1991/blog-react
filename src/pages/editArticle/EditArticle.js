import { useParams } from "react-router-dom";

function EditArticle() {
  const [articleData, setArticleData] = useParams();
  const articleId = useParams().articleId;

  return <h1>EditArticle Page</h1>;
}

export default EditArticle;

import { useState } from "react";
import { useParams } from "react-router-dom";

function EditArticle() {
  const [articleData, setArticleData] = useState();
  const articleId = useParams().articleId;

  return <h1>EditArticle Page</h1>;
}

export default EditArticle;

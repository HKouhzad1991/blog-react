import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditArticle() {
  const [articleData, setArticleData] = useState();
  const articleId = useParams().articleId;

  useEffect(() => {
    axios
      .get(`http://localhost:5000/articles/${articleId}`)
      .then((response) => setArticleData(response.data));
  }, []);

  return <h1>EditArticle Page</h1>;
}

export default EditArticle;

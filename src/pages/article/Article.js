import { useState } from "react";
import { useParams } from "react-router-dom";

function Article() {
    const articleId = useParams().articleId
    const [articleData , setArticleId] = useState({})
  

  return <h1>Article Page</h1>;
}

export default Article;

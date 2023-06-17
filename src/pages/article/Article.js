import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Article() {
  const articleId = useParams().articleId;
  const [articleData, setArticleId] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/articles/${articleId}")
      .then((response) => console.log(response));
  }, []);

  return <h1>Article Page</h1>;
}

export default Article;

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Article() {
    const articleId = useParams().articleId 
    
    const [articleData , setArticleData] = useState({})

    useEffect( () => {
        axios.get(`http://localhost:5000/articles/${articleId}`)
        .then(response => setArticleData(response.data))
    } , [])

    return (
        <h1>Article Page</h1>
    );
}

export default Article;
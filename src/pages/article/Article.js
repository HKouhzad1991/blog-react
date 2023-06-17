import { useParams } from "react-router-dom";

function Article() {

    const articleId =useParams()
    return (
        <h1>Article Page</h1>
    );
}

export default Article;